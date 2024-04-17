import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3000/plants").then(function (plants) {
      setPlants(plants.data);
    });
  }, []);
  return (
    <div className="">
      <div>
        {plants.map((plants) => (
          <div className="bg-[#626262] w-40 rounded-md m-5">
            <h1 className="text-xl text-[#fff]">{plants.common_name}</h1>
            <h1 className="text-xl text-[#fff]">{plants.scientific_name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
