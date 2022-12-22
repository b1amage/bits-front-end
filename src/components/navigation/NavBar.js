import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "components/utilities/image/Logo";
import Button from "components/utilities/button/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import useViewport from "hooks/useViewport";
import navItems from "content/navItems";
import NavLink from "components/navigation/NavLink";

const BREAK_POINT_NAVBAR = 768;

const NavBar = () => {
	const [show, setShow] = useState(false);
	const viewport = useViewport();
	const navigate = useNavigate();

	return (
		<nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-50 top-0 left-0 border-b border-gray-200 shadow-md">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				{/* Logo */}
				<Link to="/" className="flex items-center">
					<Logo className="!w-14 !h-14" />
				</Link>

				{/* CTA Button */}
				<div className="flex items-center gap-5 md:order-2">
					<Button
						onClick={() => navigate("/dashboard")}
						primary
						className="!rounded-lg transition-all !min-w-0 !text-lg"
					>
						My dashboard
					</Button>
					{viewport.width <= BREAK_POINT_NAVBAR && (
						<GiHamburgerMenu
							className="text-2xl cursor-pointer"
							onClick={() => setShow((prev) => !prev)}
						/>
					)}
				</div>

				{/* Navigation */}

				{viewport.width > BREAK_POINT_NAVBAR ? (
					<div className="flex flex-row p-4 mt-0 space-x-8 text-sm font-medium bg-transparent border-0 rounded-lg">
						{navItems.length > 0 &&
							navItems.map((item, index) => (
								<NavLink to={item.to} key={index}>
									{item.text}
								</NavLink>
							))}
					</div>
				) : (
					<div
						className={`items-center justify-between w-full ${
							show ? "block" : "hidden"
						}`}
					>
						<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:mt-0 md:text-sm md:font-medium md:bg-white">
							{navItems.length > 0 &&
								navItems.map((item, index) => (
									<NavLink to={item.to} key={index}>
										{item.text}
									</NavLink>
								))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
