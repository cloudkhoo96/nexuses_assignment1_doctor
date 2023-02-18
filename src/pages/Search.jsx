import React from "react";
import { useNavigate } from "react-router-dom";
import bacteria from "../images/bacteria.png";
import doctor from "../images/doctor.png";

const Search = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/doctorslist");
  }

  return (
    <>
      <div class="bg-background bg-cover">
        <div class="flex flex-row justify-center items-center">
          <div>
            <h2>Choose one to begin your search</h2>
          </div>
          <div class="flex flex-col min-h-screen justify-center items-center p-11">
            <div class="flex flex-row p-9">
              <img src={bacteria} width="80"></img>
              <div class="m-5">
                <input
                  type="search"
                  placeholder="Disease / Illness"
                  list="d/i"
                  name="d/i"
                  class="border border-black"
                />
                <datalist id="d/i">
                  <option value="Disease 1">Disease 1</option>
                  <option value="Disease 2">Disease 2</option>
                  <option value="Disease 3">Disease 3</option>
                  <option value="Disease 4">Disease 4</option>
                  <option value="Disease 5">Disease 5</option>
                </datalist>
              </div>
            </div>
            <div>
              <p class="text-4xl">OR</p>
            </div>
            <div class="flex flex-row p-9">
              <img src={doctor} width="70"></img>
              <div class="m-5">
                <input
                  type="search"
                  placeholder="Doctor's Specialization"
                  list="doctor"
                  name="doctor"
                  class="border border-black"
                />
                <datalist id="doctor">
                  <option value="Specialist 1">Specialist 1</option>
                  <option value="Specialist 2">Specialist 2</option>
                  <option value="Specialist 3">Specialist 3</option>
                  <option value="Specialist 4">Specialist 4</option>
                  <option value="Specialist 5">Specialist 5</option>
                </datalist>
              </div>
            </div>
            <div>
              <button
                onClick={handleClick}
                class="bg-blue-500 hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
