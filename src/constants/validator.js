import REGEX from './regex';

const VALIDATOR = {
  invalidNumberOfCars: (value) => value < 2,
  invalidCarName: (names) => names.some((name) => !REGEX.englishOrKorean(name)),
  invalidCarNameLength: (names) => names.some((name) => name.length > 5),
  invalidTryCount: (input) => !REGEX.number(input),
  invalidTryCountRange: (input) => Number(input) < 1,
};

export default VALIDATOR;
