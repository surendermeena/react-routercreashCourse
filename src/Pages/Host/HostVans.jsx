import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => {
        setVans(data.vans);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(vans);

  const vansElements = vans.map((van) => (
    <div
      key={van.id}
      className="border p-2 w-[400px] m-2 h-[200px] hover:shadow-gray-500 hover:shadow-lg"
    >
      <Link to={van.id}>
        <h2 className="text-center"> {van.name} </h2>
        <div className="flex justify-around ">
          <div>
            <img
              src={van.imageUrl}
              className="rounded-lg"
              alt=""
              height={100}
              width={100}
            />
          </div>

          <div className="">
            <p> {`$ ${van.price} / day`} </p>
            <p> {van.type} </p>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="h-screen flex flex-col ">
      <h1 className="text-2xl text-center ">Host Vans List Page</h1>
      <div className="  flex flex-col items-center  ">
        {" "}
        {vansElements.length > 0 ? vansElements : "Loading......."}
      </div>
      <h1 className="text-2xl text-center ">Vans Page goes here</h1>
    </div>
  );
};

export default Vans;
