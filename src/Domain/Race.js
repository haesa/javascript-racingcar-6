import createRandomNumber from '../random';
import { RACE } from '../constants/index';

const Race = {
  race(cars) {
    return cars.map((car) => Race.forward(car, createRandomNumber()));
  },
  forward(car, randomNumber) {
    return randomNumber >= RACE.forwardThreshold
      ? { ...car, distance: car.distance + 1 }
      : car;
  },
};

export default Race;
