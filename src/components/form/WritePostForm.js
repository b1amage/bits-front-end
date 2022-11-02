import TextArea from "components/utilities/textarea/TextArea";
import NavLink from "components/navigation/NavLink";
import Button from "components/utilities/button/Button";
import Error from "components/utilities/form/Error";

const WritePostForm = ({ onSubmit, onChange, value, err, formClassName }) => {
	return (
		<form
			onSubmit={onSubmit}
			className={`items-end relative p-4 md:p-8 w-full h-screen flex flex-col ${formClassName}`}
		>
			<div className="flex gap-5 h-[25vh] items-end justify-end">
				<NavLink to="/draft" className="!p-2">
					Draft
				</NavLink>
				<Button
					children="Next"
					type="submit"
					className={`!min-w-[100px]`}
					primary
				/>
			</div>

			<div className="max-h-[70vh] h-full flex flex-col justify-end w-full py-4">
				{err && <Error children={err} className="" fluid />}
				<TextArea
					className=""
					children={"Write your story"}
					onChange={onChange}
					name="content"
					value={value}
					err={err}
				/>
			</div>
		</form>
	);
};

export default WritePostForm;
