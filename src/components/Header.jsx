import { useState } from "react";
import Modal from "./Modal";
import Card from "./Card";

const Header = ({ data, setData, likedCars, setLikedCars, handleSearch }) => {
  const [showLikeModal, setShowLikeModal] = useState(false);

  const ToggleModal = () => {
    setShowLikeModal((prev) => !prev);
  };
  return (
    <>
      {showLikeModal && (
        <Modal ToggleModal={ToggleModal}>
          {data.map((car) => {
            return car.isLiked ? (
              <Card
                {...car}
                data={data}
                setData={setData}
                key={car.id}
                likedCars={likedCars}
                setLikedCars={setLikedCars}
              ></Card>
            ) : null;
          })}
          {!likedCars.length && (
            <div className="notLikedCard">
              <span>¯\_(ツ)_/¯ </span>{" "}
              <span className="title">You don’t have any liked cars yet.</span>{" "}
            </div>
          )}
        </Modal>
      )}
      <header>
        <div className="container  d-flex">
          <div className="search-logo d-flex">
            <a href="#0">
              <img src={require("../images/logo.png")} alt="" />
            </a>
            <div className="search d-flex">
              <label for="search" className="search-icon">
                {" "}
                <i className="fa-solid fa-magnifying-glass"></i>
              </label>
              <input
                type="text"
                placeholder="Search something here"
                onChange={handleSearch}
              />
              <div className="filter-icon">
                <img src={require("../images/filter.png")} alt="" />
              </div>
            </div>
          </div>
          <div className="profile-notification d-flex">
            <div className="like-btn notification" onClick={ToggleModal}>
              <i className="fa-solid fa-heart"></i>
              {likedCars.length ? <span></span> : null}
            </div>
            <div className="bell-btn notification">
              <i className="fa-solid fa-bell"></i>
            </div>
            <div className="settings-btn notification">
              <i className="fa-solid fa-gear"></i>
            </div>
            <div className="profile-img notification">
              <img src={require("../images/profile-img.png")} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
