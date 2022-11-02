import Loading from "components/loading/Loading";

const LoadingPreview = () => {
	return (
		<div className="flex flex-col gap-5">
			<h1 className="text-2xl font-bold lg:text-4xl text-primary-100">
				Loading
			</h1>
			<Loading />
		</div>
	);
};

export default LoadingPreview;
