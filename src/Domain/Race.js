import createRandomNumber from '../random';

const Race = {
  race(cars) {
    return cars.map((car) => Race.forward(car, createRandomNumber()));
  },
  forward(car, randomNumber) {
    return randomNumber >= 4 ? { ...car, distance: car.distance + 1 } : car;
  },
};

export default Race;
