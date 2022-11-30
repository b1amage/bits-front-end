import { useEffect, useState } from "react";
import Container from "components/utilities/container/Container";
import CMSBanner from "../components/dashboard/CMSBanner";
import SearchBox from "components/search/SearchBox";
import Blog from "components/blog/Blog";
import ScrollContainer from "components/utilities/container/ScrollContainer";
import Category from "components/category/Category";
import topics from "content/topics";
import Button from "components/utilities/button/Button";
import loginApi from "api/loginApi";
import { useNavigate } from "react-router-dom";
import blogApi from "api/blogApi";

const DashboardPage = () => {
	// const [blogs, setBlogs] = useState([]);
	const [currentCategory, setCurrentCategory] = useState("");
	const navigate = useNavigate();
	const [userBlogs, setUserBlogs] = useState([])
	
	useEffect(() => {
		if (loginApi.isLogin() === null){
			navigate('/login')
		}
	}, [navigate])

	useEffect(() => {
		const allUserBlogs = async() => {
			const response = await blogApi.getUserBlogs(currentCategory);
			setUserBlogs(response.data.results)
		}
		allUserBlogs()
	}, [currentCategory])
	
	const handleCategoryClick = (e) => {
		// set current category (add css)
		setCurrentCategory(e.target.id);
		// call API get blog by category
		// set blogs to data.results
	};

	const formatDate = (strDateTime) => {
		var options = { day: 'numeric', month: 'long', year: 'numeric' };
		return new Date(strDateTime).toLocaleDateString([],options);
	}

	return (
		<Container className="relative flex flex-col">
			<CMSBanner  username={localStorage.getItem("user") !== null && JSON.parse(localStorage.getItem("user")).name}/>
			<SearchBox className="mt-10 mb-2" />

			<ScrollContainer className="mb-10">
				{topics.length > 0 &&
					topics.map((item, index) => (
						<Category
							isActive={item.value === currentCategory}
							id={item.value}
							onClick={handleCategoryClick}
							key={index}
						>
							{item.value}
						</Category>
					))}
			</ScrollContainer>

			<div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2 place-items-center md:place-items-start">
				{userBlogs
					.map((item, index) => (
						<Blog
							editable
							readCount={item.timeToRead}
							likeCount={item.heartCount}
							key={index}
							img={item.banner}
							author={item.user.username}
							date={formatDate(item.user.createdAt)}
							title={item.title}
						/>
					))}
			</div>

			<Button
				isRound
				primary
				className="!w-[75px] !h-[75px] !text-5xl fixed bottom-4 left-1/2 -translate-x-1/2"
			>
				+
			</Button>
		</Container>
	);
};

export default DashboardPage;
