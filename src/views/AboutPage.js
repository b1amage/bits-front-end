import React from "react";
import Container from "components/utilities/container/Container";
import AboutCard from "components/about/AboutCard";
import about from "content/about";
import Title from "components/utilities/text/Title";

const AboutPage = () => {
	return (
		<Container className="flex flex-col items-center justify-center min-h-screen gap-10 lg:gap-20">
			<Title>Developer Team</Title>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 place-items-center md:gap-10">
				{about.length > 0 &&
					about.map((item, index) => (
						<AboutCard
							name={item.name}
							key={index}
							role={item.role}
							fb={item.fb}
							img={item.img}
						/>
					))}
			</div>
		</Container>
	);
};

export default AboutPage;
