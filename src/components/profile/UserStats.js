import stats from "content/userStats";
import UserStat from "components/statistic/UserStat";

const UserStats = () => {
	return (
		<div className="inline-flex justify-around w-full my-7 lg:my-12 2xl:my-24">
			{stats.map((stat, index) => {
				return (
					<UserStat
						key={index}
						quantity={stat.quantity}
						name={stat.name}
					/>
				);
			})}
		</div>
	);
};

export default UserStats;
