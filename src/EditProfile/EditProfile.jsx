import axios from 'axios'
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import useAxiosSecure from '../Axios/useAxiosSecure'
import Swal from 'sweetalert2'
import { updateProfile } from 'firebase/auth'
import { auth } from '../Firebase_Auth/Firebase.init'

const EditProfile = () => {
  const profileData = useLoaderData()
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
  console.log(profileData)

  const handleEditProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.files[0]

    const updateProfileInDatabase = (imageURL) => {
      const profileInfo = {
        name: name,
        photo: imageURL
      }

      axiosSecure.patch(`/users/${profileData._id}`,profileInfo)
      .then(res => {
        if(res.data.modifiedCount){
              Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Profile has been updated",
              showConfirmButton: false,
              timer: 1500
        });

        updateProfile(auth.currentUser, {
          displayName: profileInfo.name,
          photoURL: profileInfo.photo
        }).then(() => {
          console.log("Profile Updated")
        }).catch(err => {
          console.log(err)
        })

        navigate(`/profile/${profileData.email}`)
        }
      }).catch(err => {
        console.log(err)
      })
    }

    if(photo){
      const formData = new FormData();
      formData.append('image',photo);
      const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;

      axios.post(image_API_URL,formData)
      .then(res => {
        updateProfileInDatabase(res.data.data.url)
      })
      .catch(err => {
        console.log(err)
      })

    }
    else{
      updateProfileInDatabase(profileData.photo)
    }

  }

  return (
    <div className='my-20'>
  <fieldset className="fieldset bg-purple-300 border-base-300 mx-auto rounded-box w-xs border p-4">
  <h1 className='text-3xl font-bold text-center'>Edit Profile</h1>

    <form onSubmit={handleEditProfile}>
        <label className="label mt-4">Full Name</label>
        <input type="text" name='name' className="input" placeholder="Your Name" defaultValue={profileData.name}/>

        <label className="label mt-4">Photo</label>
        <input type="file" name='photo' className="file-input" />

        <button className="btn btn-neutral mt-8 w-full">Update Profile</button>
    </form>
</fieldset>
    </div>
  )
}

export default EditProfile