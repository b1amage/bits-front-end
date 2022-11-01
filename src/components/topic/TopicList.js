import React from "react";
import Topic from "./Topic";
import PropTypes from "prop-types";

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
					>
						{item.value}
					</Topic>
				))}
		</div>
	);
};

TopicList.propTypes = {
	topics: PropTypes.arrayOf(PropTypes.object).isRequired,
	selectedTopics: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClick: PropTypes.func,
};

export default TopicList;
