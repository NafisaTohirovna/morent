import Button from "./Button";

const Card = ({
  id,
  name,
  type,
  img,
  gasoline,
  capacity,
  price,
  setData,
  data,
  isLiked,
  setLikedCars,
}) => {
  const handleLike = (id) => {
    const likedCar = data.find((car) => car.id == id);
    likedCar.isLiked = !likedCar.isLiked;

    setLikedCars((prev) => {
      const alreadyLiked = prev.find((car) => car.id === id);
      if (alreadyLiked) {
        return prev.filter((car) => car.id !== id);
      } else {
        return [...prev, likedCar];
      }
    });

    const filterData = data.filter((car) => car.id !== id);
    const updateData = [...filterData, likedCar];
    updateData.sort((firstCar, lastCar) => firstCar.id - lastCar.id);
    setData(updateData);
  };

  return (
    <div>
      <div className="card">
        <div className="card-title d-flex">
          <div>
            <h2>{name}</h2>
            <h6>{type}</h6>
          </div>
          <div className="card-like" onClick={() => handleLike(id)}>
            <i
              className={`${
                isLiked ? "fa-solid liked" : "fa-regular"
              } fa-heart  `}
            ></i>
          </div>
        </div>
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <div className="card-specification d-flex">
          <h6>
            <img src={require("../images/gasoline.png")} alt="" />
            {gasoline}
          </h6>
          <h6>
            <img src={require("../images/manual.png")} alt="" />
            Manual
          </h6>
          <h6>
            <img src={require("../images/capacity.png")} alt="" />
            {capacity} People
          </h6>
        </div>
        <div className="price-rent d-flex">
          <h2>
            {price}/ <span>day</span>
          </h2>
          <Button>Rent Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
