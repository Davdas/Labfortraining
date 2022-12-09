import { useState } from "react";
import "../weatherApp/WeatherApp.Module.css";
import { BsSearch } from "react-icons/bs";

const WeatherApp = () => {
  const [cityInput, setCityInput] = useState("");

  const [weatherData, setWeatherData] = useState<any>({});

  const API_KEY = "16fbb97c844448360bf68abb7b9762d1";
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=imperial `;

  const getWeather = () => {
    return fetch(Url)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  };

  return (
    <>
      <div>
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card bg-dark text-white text-center">
                <div className="input-group mb-2 w-75 m-auto mt-2 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search City..."
                    aria-label="Search City"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setCityInput(e.target.value)}
                  />
                  <button
                    type="button"
                    className="input-group-text"
                    id="basic-addon2"
                    onClick={getWeather}
                  >
                    <BsSearch />
                  </button>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1561484930-974554019ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80w="
                  className="card-img-top rounded-4"
                  alt="small"
                />
                <h3 className="card-title">Weather Forcast</h3>
                <h4 className="card-text">{weatherData.name}</h4>
                <div className="card-body d-flex justify-content-between p-2">
                  <div className="card-text">
                    {weatherData.main ? (
                      <h5>Temp : {weatherData.main.temp}</h5>
                    ) : null}
                  </div>
                  <div className="card-text">
                    {weatherData.main ? (
                      <h5>Humidity : {weatherData.main.humidity}</h5>
                    ) : null}
                  </div>
                  <div className="card-text">
                    {weatherData.main ? (
                      <h5>Description : {weatherData.weather[0].main}</h5>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
