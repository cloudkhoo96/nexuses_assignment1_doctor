import React from "react";
import { useNavigate } from "react-router-dom";
import doctor from "../images/doctor.png";

const DoctorCard = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/profile");
  }

  return (
    <div class="flex flex-col justify-center items-center p-3">
      <div class="bg-blue-100 flex flex-row border border-black justify-center items-center p-5 w-3/4">
        <div class="border border-white mr-6 hover:opacity-10 hover:cursor-pointer">
          <img onClick={handleClick} src={doctor} width="90"></img>
        </div>
        <div>
          <h1>(Name)</h1>
          <ul class="list-disc">
            <li>Specialization</li>
            <li>Year's of Experience</li>
            <li>Rating</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
