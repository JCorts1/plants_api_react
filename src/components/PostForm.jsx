import React from "react";
import { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [plant, setPlant] = useState({
    streetname: "",
    sciencename: "",
    family: "",
    humansToxic: false,
    catsToxic: false,
    dogsToxic: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://127.0.0.1:3000/foods", { plants: plant });
  }

  return (
    <div className="bg-[#47BE35] rounded-3xl w-2/4 flex items-center justify-center">
      <form>
        <div className="m-3">
          <label className="text-white text-xl mr-4"  htmlFor="streetName">Common Name:</label>
          <input onChange={(event)=> {
            setPlant({...plant, streetname:event.target.value})
          }} className="rounded-lg" id="streetName" type="text" />
        </div>
        <div className="m-3">
          <label className="text-white text-xl mr-4" htmlFor="scienceName">Scientific Name:</label>
          <input onChange={(event)=> {
            setPlant({...plant, sciencename:event.target.value})
          }} className="rounded-lg" id="scienceName" type="text" />
        </div>
        <div className="m-3">
          <label className="text-white text-xl mr-24" htmlFor="family">Family:</label>
          <input onChange={(event)=> {
            setPlant({...plant, family:event.target.value})
          }} className="rounded-lg" id="family" type="text" />
        </div> 
      </form>
      <div>
            <button type="submit" className="bg-[#828282] w-20 h-8 rounded-xl text-white">Insert</button>
        </div>

    </div>
  );
};

export default PostForm;
