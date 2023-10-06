import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import CatalogueCard from "./components/CatalogueCard";
import Footer from "./components/Footer";
import cars from "./__mock-data__/cars-data";
export const App = () => {
  const [data, setData] = useState(cars);
  const [likedCars, setLikedCars] = useState([]);
  console.log(likedCars);
  return (
    <>
      <Header
        data={data}
        setData={setData}
        likedCars={likedCars}
        setLikedCars={setLikedCars}
      ></Header>
      <Main />
      <CatalogueCard
        data={data}
        setData={setData}
        likedCars={likedCars}
        setLikedCars={setLikedCars}
        popularCard={true}
        rentCar="popular-card"
      />
      <CatalogueCard
        data={data}
        setData={setData}
        likedCars={likedCars}
        setLikedCars={setLikedCars}
      />

      <Footer />
    </>
  );
};
