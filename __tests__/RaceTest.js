import Race from '../src/Domain/Race';

describe('Race 클래스 테스트', () => {
  test('자동차 전진 테스트', () => {
    const result = Race.forward({ name: 'haesa', distance: 0 }, 5);
    expect(result.distance).toBe(1);
  });
});
