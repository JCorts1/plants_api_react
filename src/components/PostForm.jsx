import React from "react";
import { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [plant, setPlant] = useState({
    common_name: "",
    scientific_name: "",
    family: "",
    humansToxic: false,
    catsToxic: false,
    dogsToxic: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(plant)
    axios.post("http://127.0.0.1:3000/plants", { plants: plant });
  }

  const handleCheckboxChange = (event) => {
    setPlant({ ...plant, humansToxic: event.target.checked ? true : false });
  };

  const handleCatsToxicChange = (event) => {
    setPlant({ ...plant, catsToxic: event.target.checked ? true : false });
  };

  const handleDogsToxicChange = (event) => {
    setPlant({ ...plant, dogsToxic: event.target.checked ? true : false });
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="m-3">
        <label className="text-white text-xl mr-4" htmlFor="streetName">
          Common Name:
        </label>
        <input
          onChange={(event) => {
            setPlant({ ...plant, common_name: event.target.value });
          }}
          className="rounded-lg"
          id="streetName"
          type="text"
        />
      </div>

      <div className="m-3">
        <label className="text-white text-xl mr-4" htmlFor="scienceName">
          Scientific Name:
        </label>
        <input
          onChange={(event) => {
            setPlant({ ...plant, scientific_name: event.target.value });
          }}
          className="rounded-lg"
          id="scienceName"
          type="text"
        />
      </div>

      <div className="m-3">
        <label className="text-white text-xl mr-24" htmlFor="family">
          Family:
        </label>
        <input
          onChange={(event) => {
            setPlant({ ...plant, family: event.target.value });
          }}
          className="rounded-lg"
          id="family"
          type="text"
        />
      </div>

      <div className="mb-2">
        <label
          className="text-white text-xl"
          htmlFor="humanstoxic">
          Toxic to humans?
        </label>
        <input
        checked={plant.humansToxic}
        onChange={handleCheckboxChange}
        className="ml-4" id="humanstoxic" type="checkbox" />
      </div>

      <div className="mb-2">
        <label className="text-white text-xl" htmlFor="catstoxic">
          Toxic to cats?
        </label>
        <input
        checked = {plant.catsToxic}
        onChange={handleCatsToxicChange}
        className="ml-12" id="catstoxic" type="checkbox" />
      </div>
      <div className="mb-2">
        <label className="text-white text-xl" htmlFor="dogstoxic">
          Toxic to dogs??
        </label>
        <input 
        checked= {plant.dogsToxic}
        onChange= {handleDogsToxicChange}
        className="ml-8" id="dogstoxic" type="checkbox" />
      </div>
      <button
        type="submit"
        className="bg-[#828282] w-20 h-8 rounded-xl text-white mt-4 mb-4"
      >
        Insert
      </button>
    </form>
  );
};

export default PostForm;
