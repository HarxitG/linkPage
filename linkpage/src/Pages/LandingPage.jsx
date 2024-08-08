import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 flex flex-col justify-center items-center">
      <div className="text-center max-w-lg mx-auto px-6 py-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to LinkTree</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your All-in-One Hub for Essential Links.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Link
            to="/login"
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 bg-green-600 text-white font-bold rounded-md shadow-lg hover:bg-green-700 transition transform hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
        <footer className="text-sm text-gray-500">
          <p>© 2024 LinkTree. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;

