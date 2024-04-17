import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import plantsimg from "./assets/plants.webp"
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
    <div className="bg-[#363636] w-screen h-screen flex flex-col items-center ">
      <PostForm />
      <img className="w-3/6 rounded-xl m-20" src={plantsimg} alt="plants image" />
      <div>
        {plants.map((plant) => (
          <div className="bg-[#626262] w-40 rounded-md m-5">
            <h1 className="text-xl text-[#fff]">{plant.scientific_name}</h1>
            <h1 className="text-xl text-[#fff]">{plant.common_name}</h1>
            <h1>{plant.family}</h1>
            <div><h1>Toxic to humans:</h1><h1>{plant.humans_toxic ? "yes":"no" }</h1></div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
