class Winner {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  getWinner() {
    const max = Math.max(...this.#cars.map((car) => car.distance));
    return this.#cars
      .filter((car) => car.distance === max)
      .map((car) => car.name);
  }
}

export default Winner;
