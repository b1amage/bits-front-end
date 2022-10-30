const CONSTANT = {
	REGEX: {
		email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
		username: /^[A-Za-z0-9 ]+$/,
		password:
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*].{8,}$/,
	},

	ERROR: {
		required: "Please fill in this field!",
		email: "Please enter a valid email address!",
		username: "Username must not contain special character",
		password:
			"Password must have at least 8 characters, has at least 1 uppercase, 1 lowercase, 1 digit, 1 special character!",
		passwordMatch: "Passwords must match",
	},

	INITIAL_VALUE: {
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	},
};

export default CONSTANT;
