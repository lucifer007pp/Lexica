import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <header className="w-full bg-purple-700 text-white py-4 px-6 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">Lexica</Link>
                    <div className="flex space-x-4">
                        <Link
                            to="/login"
                            className="px-4 py-2 rounded hover:bg-purple-600 transition"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="px-4 py-2 bg-white text-purple-700 rounded hover:bg-gray-100 transition"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center text-center p-8 max-w-4xl mx-auto">
                <img src={logo} alt="Lexica Logo" className={`h-60 mb-8`} />
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    Build, Run & Share Code Instantly
                </h1>
                <p className="text-xl text-gray-600 mb-10">
                    The fastest way to test and share your Lexica code
                </p>
                <Link
                    to="/codeeditor"
                    className="px-8 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition shadow-lg"
                >
                    Get Started
                </Link>
            </main>

            <footer className="w-full bg-gray-800 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>© 2025 Lexica. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}