import InputValidator from '../src/Validator/InputValidator';

describe('InputValidator 테스트', () => {
  test('자동차 이름 입력 예외 테스트', () => {
    expect(() => InputValidator.validateCarNames('')).toThrow(
      '[ERROR] 자동차 이름을 적어도 2개 이상 입력해주세요.'
    );

    expect(() =>
      InputValidator.validateCarNames('pobi**, pororo123#, haesa123')
    ).toThrow('[ERROR] 자동차 이름은 영어 또는 한글로 입력해주세요.');

    expect(() =>
      InputValidator.validateCarNames('haesa, pobi, alalal')
    ).toThrow(
      '[ERROR] 자동차 이름은 쉼표(,)를 기준으로 5자 이하로 작성해주세요.'
    );
  });

  test('시도할 횟수 입력 예외 테스트', () => {
    expect(() => InputValidator.validateTryCount('a')).toThrow(
      '[ERROR] 숫자를 입력해주세요.'
    );

    expect(() => InputValidator.validateTryCount('0')).toThrow(
      '[ERROR] 한 번 이상 이동해야 합니다.'
    );
  });
});
