import { useState } from "react";
import Container from "components/utilities/container/Container";
import Title from "components/utilities/text/Title";
import Image from "../components/utilities/image/Image";
import axios from "axios";
import Button from "components/utilities/button/Button";
import authenticationApi from "../api/authenticationApi";
import Text from "components/utilities/text/Text";

const AvatarPickPage = () => {
	// const [selectedFile, setSelectedFile] = useState();
	// const [isFilePicked, setIsFilePicked] = useState(false);
	const [ava, setAva] = useState();
	const [loading, setLoading] = useState(false);
	const [showMessage, setShowMessage] = useState(false);

	const handleRegister = () => {
		const values = JSON.parse(localStorage.getItem("registerInfo"));
		values.avatar = ava;

		authenticationApi.register(values);
		setShowMessage(true);
	};

	const handleAvatarUpload = (e) => {
		const postImg = async () => {
			var bodyFormData = new FormData();
			bodyFormData.append("image", e.target.files[0]);

			setLoading(true);
			axios({
				method: "post",
				url: "http://localhost:8080/api/image/upload-image",
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			})
				.then(function (response) {
					//handle success
					console.log(response);
					setAva(response.data.image.src);
					setLoading(false);
				})
				.catch(function (response) {
					//handle error
					console.log(response);
				});
		};

		postImg();
	};

	return (
		<Container className="flex flex-col items-center">
			<Title className="text-center">
				Let's show an image to everyone know who you are!
			</Title>

			<form
				onSubmit={(e) => e.preventDefault()}
				className="my-10 lg:my-16"
			>
				<label htmlFor="avatar">
					<Image
						src={ava}
						className={`rounded-full md:w-[400px] md:h-[400px] w-[200px] h-[200px] mx-auto my-10 hover:brightness-75 transition-all duration-200 ${
							loading && "animate-pulse"
						}`}
					/>
				</label>

				<input
					onChange={handleAvatarUpload}
					type="file"
					name="avatar"
					id="avatar"
					className="hidden"
				/>
			</form>

			{showMessage && (
				<Text className="my-10">
					Please check your email for confirmation
				</Text>
			)}

			<Button
				className="md:w-full md:py-5"
				primary
				onClick={handleRegister}
			>
				Register
			</Button>
		</Container>
	);
};

export default AvatarPickPage;
