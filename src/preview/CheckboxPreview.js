import React from "react";
import Checkbox from "../components/utilities/form/Checkbox";

const CheckboxPreview = () => {
	return (
		<div className="flex flex-col gap-5">
			<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
				Checkbox component
			</h1>
			<Checkbox label="Sample checkbox" />
		</div>
	);
};

export default CheckboxPreview;
