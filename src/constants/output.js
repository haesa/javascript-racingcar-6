const OUTPUT = {
  raceResult: '실행 결과',
  distance: (car) => `${car.name} : ${'-'.repeat(car.distance)}`,
  winners: (winners) => `최종 우승자 : ${winners.join(', ')}`,
};

export default OUTPUT;
