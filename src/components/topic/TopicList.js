import React from "react";
import Topic from "./Topic";

const TopicList = ({ topics, selectedTopics, onClick }) => {
	return (
		<div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 place-items-center">
			{topics.length > 0 &&
				topics.map((item) => (
					<Topic
						onClick={onClick}
						id={item.value}
						key={item.value}
						icon={item.icon}
						isActive={selectedTopics.includes(item.value)}
					/>
				))}
		</div>
	);
};

export default TopicList;
