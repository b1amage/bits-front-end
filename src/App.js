import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import BlogSetupPage from "views/BlogSetupPage";
import EditBlogPage from "views/EditBlogPage";
import EditProfilePage from "views/EditProfilePage";

const RegisterPage = React.lazy(() => import("views/RegisterPage"));
const Preview = React.lazy(() => import("preview/Preview"));
const ForgotPasswordPage = React.lazy(() => import("views/ForgotPasswordPage"));
const ProfilePage = React.lazy(() => import("views/ProfilePage"));
const HomePage = React.lazy(() => import("views/HomePage"));
const LoginPage = React.lazy(() => import("views/LoginPage"));
const SuccessfulPage = React.lazy(() => import("views/SuccessfulPage"));
const BlogDetailPage = React.lazy(() => import("views/BlogDetailPage"));
const NavBar = React.lazy(() => import("components/navigation/NavBar"));
const ResetPage = React.lazy(() => import("views/ResetPage"));
const WritePostPage = React.lazy(() => import("views/WritePostPage"));
const TopicPage = React.lazy(() => import("views/TopicPage"));
const LoadingPage = React.lazy(() => import("views/LoadingPage"));
const AboutPage = React.lazy(() => import("views/AboutPage"));
const DashboardPage = React.lazy(() => import("views/DashboardPage"));
const AvatarPickPage = React.lazy(() => import("views/AvatarPickPage"));
const VerifyEmailPage = React.lazy(() => import("views/VerifyEmailPage"));
const BlogsPage = React.lazy(() => import("views/BlogsPage"));
const ErrorPage = React.lazy(() => import("views/ErrorPage"));
const NotFoundPage = React.lazy(() => import("views/NotFoundPage"));
const NoIntetnet = React.lazy(() => import("views/NoInternetPage"));

const App = () => {
	// Online state
	const [isOnline, setIsOnline] = useState(navigator.onLine);
	const {userId} = useParams()
	useEffect(() => {
		// Update network status
		const handleStatusChange = () => {
			setIsOnline(navigator.onLine);
		};

		// Listen to the online status
		window.addEventListener("online", handleStatusChange);

		// Listen to the offline status
		window.addEventListener("offline", handleStatusChange);

		// Specify how to clean up after this effect for performance improvment
		return () => {
			window.removeEventListener("online", handleStatusChange);
			window.removeEventListener("offline", handleStatusChange);
		};
	}, [isOnline]);

	return (
		<>
			{isOnline ? (
				<Suspense fallback={<LoadingPage />}>
					<NavBar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/forgot-password"
							element={<ForgotPasswordPage />}
						/>
						<Route path="/reset-password" element={<ResetPage />} />
						<Route path="/blogs/:query" element={<BlogsPage />} />
						<Route path="/profile/:userId" element={localStorage.getItem("user") !== null || userId !== null ? <ProfilePage /> : <Navigate to="/login" />} />
						<Route path="/profile/edit/:userId" element={<EditProfilePage />} />
						<Route path="/preview" element={<Preview />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route
							path="/register/img"
							element={<AvatarPickPage />}
						/>
						<Route path="/login" element={<LoginPage />} />
						<Route
							path="/successful"
							element={<SuccessfulPage />}
						/>
						<Route path="/blog/:id" element={<BlogDetailPage />} />
						<Route path="/post/write" element={<WritePostPage />} />
						<Route path="/post/setup" element={<BlogSetupPage />} />
						<Route path="/blog/edit/:blogId" element={<EditBlogPage />} />
						<Route path="/topic" element={<TopicPage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/dashboard" element={<DashboardPage />} />
						<Route
							path="/verify-email"
							element={<VerifyEmailPage />}
						/>
						<Route path="/error/:error" element={<ErrorPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Suspense>
			) : (
				<NoIntetnet />
			)}
		</>
	);
};

export default App;
