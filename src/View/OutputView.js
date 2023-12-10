import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants';

const OutputView = {
  printRaceResultMessage() {
    OutputView.printNewLine();
    Console.print(OUTPUT.raceResult);
  },
  printRaceResult(cars) {
    cars.forEach((car) => Console.print(OUTPUT.distance(car)));
    OutputView.printNewLine();
  },
  printWinner(winners) {
    Console.print(OUTPUT.winners(winners));
  },
  printNewLine() {
    Console.print('');
  },
};

export default OutputView;
