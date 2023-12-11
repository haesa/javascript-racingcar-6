import { ERROR } from '../src/constants';
import InputValidator from '../src/Validator/InputValidator';

describe('InputValidator 테스트', () => {
  test('자동차 이름 입력 예외 테스트', () => {
    expect(() => InputValidator.validateCarNames('')).toThrow(
      ERROR.numberOfCars
    );

    expect(() =>
      InputValidator.validateCarNames('pobi**, pororo123#, haesa123')
    ).toThrow(ERROR.englishOrKorean);

    expect(() =>
      InputValidator.validateCarNames('haesa, pobi, alalal')
    ).toThrow(ERROR.carNameLength);
  });

  test('시도할 횟수 입력 예외 테스트', () => {
    expect(() => InputValidator.validateTryCount('a')).toThrow(ERROR.number);

    expect(() => InputValidator.validateTryCount('0')).toThrow(
      ERROR.moreThanOne
    );
  });
});
