import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        navigate('/codeeditor'); // Redirect after successful login
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login to Lexica</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-gray-600">Don't have an account? </span>
                    <Link to="/signup" className="text-purple-600 hover:underline">
                        Sign up
                    </Link>
                </div>
                <div className="mt-4 text-center">
                    <Link to="/" className="text-purple-600 hover:underline">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}