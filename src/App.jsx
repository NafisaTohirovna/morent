import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import CatalogueCard from "./components/CatalogueCard";
import Footer from "./components/Footer";
import cars from "./__mock-data__/cars-data";
import SearchCard from "./components/SearchCard";
export const App = () => {
  const [data, setData] = useState(cars);
  const [likedCars, setLikedCars] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  return (
    <>
      <Header
        data={data}
        setData={setData}
        likedCars={likedCars}
        setLikedCars={setLikedCars}
        handleSearch={handleSearch}
      ></Header>
      {searchValue ? (
        <SearchCard
          data={data}
          searchValue={searchValue}
        ></SearchCard>
      ) : (
        <>
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
        </>
      )}

      <Footer />
    </>
  );
};
