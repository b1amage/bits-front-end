import React from "react";
import Input from "./components/utilities/form/Input";
import PageContainer from "../src/components/utilities/container/Container";

const Preview = () => {
	return (
		<PageContainer className="flex flex-col gap-10">
			<div className="flex flex-col gap-5">
				<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
					Input component
				</h1>
				<Input
					label="Sample input"
					required
					placeholder="Sample input"
				/>
			</div>

			<div className="flex flex-col gap-5">
				<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
					Input component (fluid)
				</h1>
				<Input fluid label="Sample input" placeholder="Sample input" />
			</div>

			<div className="flex flex-col gap-5">
				<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
					Input component (with error)
				</h1>
				<Input
					err="Sample error"
					label="Sample input"
					required
					placeholder="Sample input"
				/>
			</div>

			<div className="flex flex-col gap-5">
				<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
					Input component (fluid + error)
				</h1>
				<Input
					fluid
					err="Sample error"
					label="Sample input"
					required
					placeholder="Sample input"
				/>
			</div>
		</PageContainer>
	);
};

export default Preview;
