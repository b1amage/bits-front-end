import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

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

const App = () => {
	return (
		<Suspense fallback={<LoadingPage />}>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/forgot-password"
					element={<ForgotPasswordPage />}
				/>
				<Route path="/password/reset" element={<ResetPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/preview" element={<Preview />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/register/img" element={<AvatarPickPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/successful" element={<SuccessfulPage />} />
				<Route path="/blog/:id" element={<BlogDetailPage />} />
				<Route path="/post/write" element={<WritePostPage />} />
				<Route path="/topic" element={<TopicPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/verify-email" element={<VerifyEmailPage />} />
			</Routes>
		</Suspense>
	);
};

export default App;
