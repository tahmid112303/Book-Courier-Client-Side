import { memo, useRef, useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {signIn,googleSignUp,changePassword} = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef = useRef()
    const [error,setError] = useState('')

    console.log(location)

        const handleGoogleSignUp = () => {
          googleSignUp()
          .then(result => {
            console.log(result.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Signed in successfully!",
                    showConfirmButton: false,
                    timer: 3000
                });
              navigate(location.state || '/');
          }).catch(err => {
            console.log(err)
          })
        }

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email,password)
        .then(result => {
          console.log(result.user);
          Swal.fire({
              position: "center",
              icon: "success",
              title: "Signed in successfully!",
              showConfirmButton: false,
              timer: 3000
        });
          navigate(location.state || '/');
        }).catch(err => {
          console.log(err);
          setError(err.message);
        })
    }

    const handleForgotPassword = () => {
      const email = emailRef.current.value

      changePassword(email)
      .then(()=>{
          Swal.fire("Password reset link has been sent to your email. Please check your inbox and follow the instructions to reset your password.");
      }).catch(error=>{
        console.log(error)
      })
    }

  return (
        <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-30 max-sm:p-1 relative overflow-hidden font-sans rounded-2xl mt-10">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Card Container */}
      <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-xl border-2 border-slate-800 rounded-2xl p-8 shadow-2xl relative z-10 max-sm:z-0">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">Sign In</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          

          {/* Email Input */}
          <div>
            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="email"
                name='email'
                ref={emailRef}
                placeholder="name@example.com"
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder="••••••••"
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-3 pl-11 pr-11 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 focus:outline-none transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/20 active:scale-[0.99] mt-2"
          >
            <span>Login</span>
          </button>
        </form>

        {/* error text */}
        {error && <p className='text-red-700 font-bold mt-4'>Invalid credentials</p>}

        <div className='mt-4 flex justify-center'>
            <a onClick={handleForgotPassword} className='link link-hover text-white'>Forgotten Password?</a>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-slate-900/90 px-3 text-slate-500">Or continue with</span>
          </div>
        </div>

        {/* Social Login */}
        <button onClick={handleGoogleSignUp} className="btn w-full bg-white text-black 
        border-[#e5e5e5]">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                 Google
        </button>


        {/* Footer */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Don't have an account?{' '}
         <Link to='/register' className="text-indigo-400 hover:underline font-medium">Register</Link>
        </p>

      </div>
    </div>
  )
}

export default memo(Login)