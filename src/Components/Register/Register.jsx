
import { memo, useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Image } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';
import useAxiosSecure from '../../Axios/useAxiosSecure';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createAccount,googleSignUp} = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

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
          navigate('/');
      }).catch(err => {
        console.log(err)
      })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.files[0];
        const email = e.target.email.value;
        const password = e.target.password.value;


        createAccount(email,password)
        .then(result => {
          console.log(result.user);

          const formData = new FormData()
          formData.append('image', image)
          const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`

          axios.post(image_API_URL,formData)
          .then(res => {
            console.log("Image", res.data.data.url)

            const userData = {
              name: name,
              email: email,
              photo: res.data.data.url
            }

            axiosSecure.post('/users', userData)
            .then(res => {
              if(res.data.insertedId){
                  console.log("Account created in the database")
                  Swal.fire("Account created successfully!");
                  navigate('/login')
              }
            })

            updateProfile(result.user, {
            displayName: name,
            photoURL: res.data.data.url
          }).then(()=>{
            console.log("Profile updated")
          }).catch(err => {
            console.log(err)
          })  
          })

        })
        .catch(err => {
          console.log(err)
        })

    }

return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-30 max-sm:p-4 relative overflow-hidden font-sans rounded-2xl mt-10 ">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Card Container */}
      <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl relative z-10 max-sm:z-0">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">Create an account</h1>
          <p className="text-slate-400 text-sm mt-2">
            Enter your details below to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          
          {/* Full Name Input */}
          <div>
            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                name='name'
                placeholder="John Doe"
                required
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
            </div>
          </div>

{/* Image File Input */}
<div>
  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
    Profile Photo (Optional)
  </label>
  <div className="relative">
    <Image className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
    <input
      type="file"
      name="image"
      accept="image/*"
      className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-2.5 pl-11 pr-4 text-slate-200 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 cursor-pointer focus:outline-none focus:border-indigo-500 transition-colors"
    />
  </div>
</div>

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
                placeholder="name@example.com"
                required
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
                required
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
            <span>Create Account</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-slate-900/90 px-3 text-slate-500">Or continue with</span>
          </div>
        </div>

        {/* Social Buttons */}
        <button onClick={handleGoogleSignUp} className="btn w-full bg-white text-black 
        border-[#e5e5e5]">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                 Google
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Already have an account?{' '}
         <Link to='/login' className="text-indigo-400 hover:underline font-medium">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default memo(Register)