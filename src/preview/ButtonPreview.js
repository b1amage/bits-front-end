import React from "react";
import Button from "../components/utilities/button/Button";

const ButtonPreview = () => {
	return (
		<>
			<div className="flex items-center gap-20">
				<div className="flex flex-col items-center gap-5">
					<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
						Primary Button
					</h1>

					<Button primary animate>
						Sample Button
					</Button>
				</div>

				<div className="flex flex-col gap-5">
					<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
						Secondary Button
					</h1>

					<Button animate>Sample Button</Button>
				</div>
			</div>

			<div className="flex items-center gap-20">
				<div className="flex flex-col gap-5">
					<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
						Round Button (primary)
					</h1>

					<Button primary isRound animate>
						Sample Button
					</Button>
				</div>

				<div className="flex flex-col gap-5">
					<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
						Round Button (primary)
					</h1>

					<Button isRound animate>
						Sample Button
					</Button>
				</div>
			</div>

			<div className="flex flex-col gap-5">
				<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
					Disabled Button
				</h1>

				<Button disabled animate>
					Sample Button
				</Button>
			</div>
		</>
	);
};

export default ButtonPreview;
