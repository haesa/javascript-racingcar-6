import Race from '../src/Race';

describe('Race 클래스 테스트', () => {
  test('자동차 전진 테스트', () => {
    const result = Race.forward({ name: 'haesa', distance: 0 }, 5);
    expect(result.distance).toBe(1);
  });

  test('자동차 우승자 테스트', () => {
    const race = new Race([
      { name: 'haesa', distance: 5 },
      { name: 'pobi', distance: 0 },
    ]);
    const winner = race.winner();
    expect(winner).toEqual([{ name: 'haesa', distance: 5 }]);
  });
});
