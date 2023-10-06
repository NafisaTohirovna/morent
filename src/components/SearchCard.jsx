import Card from "./Card";
const SearchCard = ({ data, searchValue }) => {
  return (
    <section id="searchCard">
      <div className="container">
        <div className="cards">
          {data.map((car) => {
            let carName = car.name;
            if (carName.includes(searchValue)) {
              return <Card {...car} data={data} key={car.id} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchCard;
