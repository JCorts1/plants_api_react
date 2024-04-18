import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import plantsimg from "./assets/plants.webp";
import PostForm from "./components/PostForm";

const App = () => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3000/plants").then(function (plants) {
      setPlants(plants.data);
      console.log(plants);
    });
  }, []);
  return (
    <div className="bg-[#363636] w-screen h-full flex flex-col items-center ">
      <PostForm />
      <img
        className="w-3/6 rounded-xl m-20"
        src={plantsimg}
        alt="plants image"
      />
      <div>
        {plants.map((plant) => (
          <div className="bg-[#626262] w-80 rounded-md m-5">
            <div className="flex p-2">
              <h2 className="text-xl text-white">Scientific Name:</h2> <p className="text-lg ml-2 text-white">{plant.scientific_name}</p>{" "}
            </div>

            <div className="flex p-2">
              <h2 className="text-xl text-white">Common Name:</h2> <p className="text-lg text-white ml-2">{plant.common_name}</p>
            </div>

           <div className="flex p-2">
            <h2 className="text-xl text-white">Family:</h2> <p className="text-[#D3D6CA] ml-5">{plant.family}</p>
           </div>

            <div className="flex p-2">
              <h1 className="text-xl text-white">Toxic to humans:</h1>
              <p className="text-lg text-white ml-2">{plant.humans_toxic ? "yes" : "no"}</p>
            </div>

            <div className="flex p-2">
              <h1 className="text-xl text-white">Toxic to Cats:</h1>
              <p className="ml-2 text-lg text-white">{plant.cats_toxic ? "yes" : "no "}</p>
            </div>

            <div className="flex p-2">
              <h1 className="text-xl text-white">Toxic to Dogs:</h1>
              <p className="text-lg text-white ml-2">{plants.dogs_toxic ? "yes" : "no"}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
