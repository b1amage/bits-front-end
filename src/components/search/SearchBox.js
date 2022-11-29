import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "components/utilities/form/Input";
import search from "assets/svg/search.svg";
import Image from "components/utilities/image/Image";

const SearchBox = ({ className }) => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handleSearch = (e) => {
		e.preventDefault();
		navigate(`/blogs/${query}`);
	};

	const handleChange = (e) => setQuery(e.target.value);

	return (
		<form
			onSubmit={handleSearch}
			className={`relative h-full ${className}`}
		>
			<Image
				onClick={handleSearch}
				src={search}
				className="absolute z-10 w-5 h-5 -translate-y-1/2 cursor-pointer top-1/2 md:w-8 md:h-8 left-4"
			/>
			<Input
				onChange={handleChange}
				fluid
				placeholder="Search"
				className="!px-12 md:!px-16 text-xl"
			/>
		</form>
	);
};

export default SearchBox;
