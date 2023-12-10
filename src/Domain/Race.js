import createRandomNumber from '../random';

class Race {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  repeatRace(n) {
    for (let round = 1; round <= n; round += 1) {
      this.#cars = this.race();
    }
  }

  race() {
    return this.#cars.map((car) => Race.forward(car, createRandomNumber()));
  }

  static forward(car, randomNumber) {
    return randomNumber > 4 ? { ...car, distance: car.distance + 1 } : car;
  }

  winner() {
    const max = Math.max(...this.#cars.map((car) => car.distance));
    return this.#cars.filter((car) => car.distance === max);
  }
}

export default Race;
