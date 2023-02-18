import React from "react";
import doctor from "../images/doctor.png";

const Profile = () => {
  return (
    <>
      <div class="bg-background bg-cover flex flex-col justify-center items-center">
        <div class="bg-blue-100 text-4xl w-2/5 flex justify-center items-center p-4 border border-black rounded m-2">
          (Name)
        </div>
        <div class="bg-blue-100 border w-1/8 border-black rounded flex flex-row justify-center items-center p-4 m-2">
          <img width="100" src={doctor}></img>
        </div>
        <div class="w-4/5">
          <div class="bg-blue-100 border border-black rounded h-56 m-2">
            Full Profile
          </div>
          <div class="bg-blue-100 border border-black rounded h-56 m-2">
            Recent Successful Cases
          </div>
        </div>
        <div class="flex justify-center pb-3">
          <button class="bg-blue-500 hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Engage Doctor
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
