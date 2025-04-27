import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Handle signup logic here
        navigate('/codeeditor'); // Redirect after successful signup
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
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
                        Create Account
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-gray-600">Already have an account? </span>
                    <Link to="/login" className="text-purple-600 hover:underline">
                        Login
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