import React from "react";
import DoctorCard from "../components/DoctorCard";

const DoctorsList = () => {
  return (
    <><div class="bg-background bg-cover bg-no-repeat">
      <div class="flex flex-row p-3 justify-end">
        <button class="bg-blue-500 hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Sort
        </button>
      </div>
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      </div>
    </>
  );
};

export default DoctorsList;
