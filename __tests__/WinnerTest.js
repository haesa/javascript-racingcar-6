import Winner from '../src/Domain/Winner';

describe('Winner 클래스 테스트', () => {
  test('자동차 우승자 테스트', () => {
    const winner = new Winner([
      { name: 'haesa', distance: 5 },
      { name: 'pobi', distance: 0 },
      { name: '해사', distance: 5 },
    ]);
    const result = winner.getWinner();
    expect(result).toEqual(['haesa', '해사']);
  });
});
