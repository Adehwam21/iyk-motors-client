import React, { useState } from 'react';
import carData from './carData.json';
import CarsDetailPage from './CarsDetailPage';
import Sidebar from './sidebar';

function CarBlog() {
  const [filters, setFilters] = useState({ vehicleType: '', vehicleTransmission: '', vehicleYear: '' });

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const filteredCars = carData.cars
    .filter(category => !filters.vehicleType || category.vehicleType === filters.vehicleType)
    .flatMap(category => category.cars)
    .filter(car => !filters.vehicleTransmission || car.transmission === filters.vehicleTransmission)
    .filter(car => !filters.vehicleYear || car.year === filters.vehicleYear);

  return (
    <div className="flex ">
      <Sidebar onFilterChange={handleFilterChange} />
      <div className="car-blog flex-grow p-5">
        <p className="bebas-neue text-[26px]">
          WE HAVE FOUND <span className="text-[#1e7ed7]">{filteredCars.length} CARS </span>FOR YOU
        </p>
        <div className="flex flex-wrap">
          {filteredCars.map((car, index) => (
            <div key={index} className="card-card w-[350px] h-[400px] flex flex-col justify-center items-center ml-3 mr-3 mb-5">
              <img className="w-full h-48" src={car.image} alt={car.name} />
              <h3 className="bebas-neue text-[26px]">{car.name} <span className="text-[#1e7ed7]">- {car.year}</span></h3>
              <p className="mb-8">Start prices from {car.price}</p>
              <CarsDetailPage />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarBlog;
