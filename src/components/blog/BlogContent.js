const BlogContent = ({ content }) => {
	return (
		<div
			dangerouslySetInnerHTML={{ __html: content }}
			className="flex flex-col gap-5 my-3 lg:text-2xl lg:my-8 lg:gap-10 blog-content"
		></div>
	);
};

export default BlogContent;
