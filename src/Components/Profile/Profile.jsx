import { useLoaderData, useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const profileData = useLoaderData();
  
  return (
    <>

      <h1 className="text-5xl font-semibold text-center my-10">Profile Data</h1>

    <div className="max-w-md mx-auto p-6 bg-blue-200 rounded-xl shadow-md">
      <div className="flex flex-col items-center gap-4">
        <img
          src={profileData.photo}
          alt="Profile Photo"
          className="w-24 h-24 rounded-full object-cover"
        />

        <h2 className="text-xl font-semibold text-gray-800">
          {profileData.name}
        </h2>

        <p className="text-gray-500">{profileData.email}</p>

        <span className="px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
          {profileData.role}
        </span>

        <button onClick={()=>navigate(`/editProfile/${profileData._id}`)} className="btn btn-primary w-full mt-2">
          Edit Information
        </button>
      </div>
    </div>
    </>
  );
}

export default Profile