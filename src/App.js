import InputView from './View/InputView';
import OutputView from './View/OutputView';
import Race from './Domain/Race';
import Winner from './Domain/Winner';

class App {
  #cars;

  async play() {
    const names = await InputView.readCarNames();
    this.#cars = names.map((name) => ({ name, distance: 0 }));

    const tryCount = await InputView.readTryCount();
    this.#race(tryCount);
    this.#determineWinner();
  }

  #race(tryCount) {
    OutputView.printResult();
    for (let lap = 0; lap < tryCount; lap += 1) {
      this.#cars = Race.race(this.#cars);
      OutputView.printRaceResult(this.#cars);
    }
  }

  #determineWinner() {
    const winner = new Winner(this.#cars);
    const winners = winner.getWinner();
    OutputView.printWinner(winners);
  }
}

export default App;
