import { useState } from "react";
import { doSignInWithEmailAndPassword,doSignInWithGoogle } from "../firebase/auth";
import { useAuth } from "../context/Authcontext/Authcontex";
import { Link,Navigate, useNavigate } from "react-router-dom";
import { Package } from "lucide-react";
import { motion } from "framer-motion";

const Login = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            try {
                await doSignInWithEmailAndPassword(email, password)
                navigate('/roleselect')
            } catch (err) {
                setErrorMessage(err.message)
                setIsSigningIn(false)
            }
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle()
                .then(() => {
                    navigate('/roleselect')
                })
                .catch(err => {
                    setErrorMessage(err.message)
                    setIsSigningIn(false)
                })
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            {userLoggedIn && (<Navigate to={'/roleselect'} replace={true} />)}

            {/* Header */}
      

            <main className="pt-24 flex justify-center items-center min-h-screen">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Sign in to continue to your account</p>
                    </div>
                    
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                autoComplete='current-password'
                                required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            />
                        </div>

                        {errorMessage && (
                            <div className="text-red-500 text-sm font-semibold bg-red-50 dark:bg-red-900/30 p-3 rounded-lg">
                                {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className={`w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold ${isSigningIn ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 transition-all transform hover:scale-105'}`}
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600 dark:text-gray-400">
                            Don't have an account?{' '}
                            <Link to="/register" className="font-semibold text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                                Sign up
                            </Link>
                        </p>
                    </div>

                    <div className="mt-6 flex items-center justify-center">
                        <div className="border-t border-gray-300 dark:border-gray-600 w-full"></div>
                        <span className="px-4 text-gray-500 dark:text-gray-400 text-sm">OR</span>
                        <div className="border-t border-gray-300 dark:border-gray-600 w-full"></div>
                    </div>

                    <button
                        onClick={onGoogleSignIn}
                        disabled={isSigningIn}
                        className={`mt-6 w-full flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-gray-700 dark:text-gray-300 ${isSigningIn ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-50 dark:hover:bg-gray-600 transition-all transform hover:scale-105'}`}
                    >
                        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_40)">
                                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_40">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                    </button>
                </motion.div>
            </main>
        </div>
    )
}

export default Login