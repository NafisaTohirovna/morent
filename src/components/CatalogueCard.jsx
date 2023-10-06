import Button from "./Button";
import Card from "./Card";
const CatalogueCard = ({
  data,
  setData,
  likedCars,
  setLikedCars,
  popularCard,
  rentCar,
}) => {
  if (popularCard) {
    return (
      <div className="popular-card-wrap">
        <div className="popular-card-title">
          <div className="container  d-flex">
            <p>Popular Car</p>
            <a href="#0">View All</a>
          </div>
        </div>
        <div className={`cards ${rentCar} container`}>
          {data.map((car) => {
            return (
              <Card
                {...car}
                data={data}
                setData={setData}
                key={car.id}
                likedCars={likedCars}
                setLikedCars={setLikedCars}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    const RecomendationData = data.slice(4);

    return (
      <div>
        <div className="popular-card-title">
          <div className="container">
            <p>Recomendation Car</p>
          </div>
        </div>
        <div className={`cards `}>
          {RecomendationData.map((car) => {
            return (
              <Card
                {...car}
                data={data}
                setData={setData}
                key={car.id}
                likedCars={likedCars}
                setLikedCars={setLikedCars}
              ></Card>
            );
          })}
        </div>
        <div className="show-card">
          <Button>Show More Car</Button>
        </div>
      </div>
    );
  }
};

export default CatalogueCard;
