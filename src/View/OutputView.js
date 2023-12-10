import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResult() {
    OutputView.printNewLine();
    Console.print('실행 결과');
  },
  printRaceResult(cars) {
    cars.forEach((car) =>
      Console.print(`${car.name} : ${'-'.repeat(car.distance)}`)
    );
    OutputView.printNewLine();
  },
  printWinner(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  },
  printNewLine() {
    Console.print('');
  },
};

export default OutputView;
