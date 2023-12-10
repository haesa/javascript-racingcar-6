import { ERROR, VALIDATOR } from '../constants/index';

const InputValidator = {
  validateCarNames(input) {
    const carNames = input.split(',');
    const trimCarNames = carNames.map((carName) => carName.trim());
    if (VALIDATOR.invalidNumberOfCars(trimCarNames.length)) {
      throw new Error(ERROR.numberOfCars);
    }

    if (VALIDATOR.invalidCarName(trimCarNames)) {
      throw new Error(ERROR.englishOrKorean);
    }

    if (VALIDATOR.invalidCarNameLength(trimCarNames)) {
      throw new Error(ERROR.carNameLength);
    }
  },
  validateTryCount(input) {
    if (VALIDATOR.invalidTryCount(input)) {
      throw new Error(ERROR.number);
    }

    if (VALIDATOR.invalidTryCountRange(input)) {
      throw new Error(ERROR.moreThanOne);
    }
  },
};

export default InputValidator;
