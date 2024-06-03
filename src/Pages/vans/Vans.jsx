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
      className="border p-2 max-w-[400px] h-[300px]  max-h-[600px]   hover:shadow-gray-500 hover:shadow-lg"
    >
      <Link to={van.id}>
        <h2 className="text-center"> {van.name} </h2>
        <div>
          <img
            src={van.imageUrl}
            className="rounded-lg"
            alt=""
            height={150}
            width={150}
          />
        </div>

        <div className="text-center mt-10">
          <p> {`$ ${van.price} / day`} </p>
          <p> {van.type} </p>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="h-screen flex flex-col">
      <h1>Explore Van Options</h1>
      <div className="flex justify-around    ">
        {vansElements.length > 0 ? vansElements : "Loading"}
      </div>
      <h1>Vans Page goes here</h1>
    </div>
  );
};

export default Vans;
