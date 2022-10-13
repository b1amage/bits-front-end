import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../utilities/image/Logo";
import Button from "../utilities/button/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import useViewport from "../../hooks/useViewport";
import navItems from "../../content/navItems";
import NavLink from "./NavLink";

const BREAK_POINT_NAVBAR = 768;

const NavBar = () => {
	const [isShowNavMobile, setIsShowNavMobile] = useState(false);
	const viewport = useViewport();
	console.log(viewport.width);

	useEffect(() => {
		if (viewport.width >= BREAK_POINT_NAVBAR) {
			setIsShowNavMobile(true);
		}
	}, [viewport]);

	return (
		<nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-md">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<Link to="/" className="flex items-center">
					<Logo className="!w-14 !h-14" />
				</Link>

				<div className="flex items-center gap-2 md:order-2">
					<Button
						primary
						className="!rounded-lg transition-all !min-w-0 !text-lg"
					>
						My dashboard
					</Button>
					<GiHamburgerMenu
						className="text-2xl md:hidden"
						onClick={() => setIsShowNavMobile((prev) => !prev)}
					/>
				</div>

				{isShowNavMobile && (
					<div className="items-center justify-between w-full md:flex md:w-auto md:order-1">
						<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
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
