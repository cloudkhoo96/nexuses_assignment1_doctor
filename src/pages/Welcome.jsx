import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/search");
  }

  return (
    <>
      <div class="bg-background bg-cover flex flex-col min-h-screen justify-center items-center font-san">
        <h1 class="text-7xl m-3">Welcome</h1>
        <h2 class="text-3xl m-3">Let 's find you a suitable physician.</h2>
        <div class="flex flex-col justify-center items-center m-3">
          <br />
          <input type="text" id="patient_id" placeholder="Input Patient ID" class="border border-blue-700 text-center w-10/12"></input>
        </div>
        <button
          onClick={handleClick}
          class="bg-blue-500 hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Begin
        </button>
      </div>
    </>
  );
};

export default Welcome;
