import createRandomNumber from '../random';

class Race {
  #cars;

  constructor(names) {
    this.#cars = names.map((name) => ({ name, distance: 0 }));
  }

  race() {
    this.#cars = this.#cars.map((car) =>
      Race.forward(car, createRandomNumber())
    );
    return [...this.#cars];
  }

  static forward(car, randomNumber) {
    return randomNumber > 4 ? { ...car, distance: car.distance + 1 } : car;
  }
}

export default Race;
