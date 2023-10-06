import Button from "./Button";

// import "./Main.css";
const Main = () => {
  return (
    <section id="main">
      <div className="container">
        <div className="d-flex justify-between homeCardContainer">
          <div className="homeCard">
            <h2 className="homeCardTitle">The Best Platform for Car Rental</h2>
            <p className="cardText">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <Button>Rental Car</Button>

            <div className="img">
              <img
                className="homeImg"
                src={require("../images/car.png")}
                alt="home_car"
              />
            </div>
          </div>

          <div className="homeCard">
            <h2 className="homeCardTitle">
              Easy way to rent a car at a low price
            </h2>
            <p className="cardText">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <Button>Rental Car</Button>

            <div className="img">
              <img
                className="homeImg2"
                src={require("../images/car (1).png")}
                alt="home_car"
              />
            </div>
          </div>
        </div>

        <div className="top-content">
          <div className="pick-up">
            <div className="pickup-title">
              <input type="radio" id="radio" />
              <label for="radio">Pick - Up</label>
            </div>
            <div className="pick-up-cards">
              <div className="pick-up-card">
                <h1>Locations</h1>
                <select>
                  <option disabled>Select your city</option>
                  <option>Semarang</option>
                  <option>Semarang</option>
                  <option>Semarang</option>
                </select>
              </div>
              <div className="pick-up-card">
                <h1>Date</h1>
                <select>
                  <option disabled>Select your data</option>
                  <option>20 July 2022</option>
                  <option>20 July 2022</option>
                  <option>20 July 2022</option>
                </select>
              </div>
              <div className="pick-up-card">
                <h1>Time</h1>
                <select>
                  <option disabled>Select your time</option>
                  <option>07.00</option>
                  <option>07.00</option>
                  <option>07.00</option>
                </select>
              </div>
            </div>
          </div>
          <button className="topsection-button">
            <i className="fa-solid fa-right-left"></i>
          </button>
          <div className="pick-up">
            <div className="pickup-title">
              <input type="radio" id="radio2" />
              <label for="radio2">Drop off</label>
            </div>
            <div className="pick-up-cards">
              <div className="pick-up-card">
                <h1>Locations</h1>
                <select>
                  <option disabled>Select your city</option>
                  <option>Semarang</option>
                  <option>Semarang</option>
                  <option>Semarang</option>
                </select>
              </div>
              <div className="pick-up-card">
                <h1>Date</h1>
                <select>
                  <option disabled>Select your data</option>
                  <option>20 July 2022</option>
                  <option>20 July 2022</option>
                  <option>20 July 2022</option>
                </select>
              </div>
              <div className="pick-up-card">
                <h1>Time</h1>
                <select>
                  <option disabled>Select your time</option>
                  <option>07.00</option>
                  <option>07.00</option>
                  <option>07.00</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
