import autosize from "autosize";
import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ className, children, onChange, name, value, err }) => {
	autosize(document.getElementById("write-box"));
	return (
		<textarea
			id="write-box"
			className={`w-full max-h-[70vh] shadow-md outline-none resize-none box-border rounded-2xl px-6 py-4 ${className}`}
			placeholder={children}
			onChange={onChange}
			rows={1}
			value={value}
			err={err}
			name={name}
		></textarea>
	);
};

TextArea.propTypes = {
	className: PropTypes.string,
	onChange: PropTypes.func,
	name: PropTypes.string,
	value: PropTypes.string,
	err: PropTypes.string,
};

export default TextArea;
