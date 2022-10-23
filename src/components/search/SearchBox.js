import { useState } from "react";
import Input from "../utilities/form/Input";
import search from "../../assets/svg/search.svg";
import Image from "../utilities/image/Image";

const SearchBox = () => {
	const [query, setQuery] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		console.log("query:", query);
	};

	const handleChange = (e) => setQuery(e.target.value);

	return (
		<form onSubmit={handleSearch} className="relative h-full">
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
