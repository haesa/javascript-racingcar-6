const InputValidator = {
  validateCarNames(input) {
    const carNames = input.split(',');
    const trimCarNames = carNames.map((carName) => carName.trim());
    if (trimCarNames.length < 2) {
      throw new Error('[ERROR] 자동차 이름을 적어도 2개 이상 입력해주세요.');
    }

    if (
      trimCarNames.some((carName) => !/^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/.test(carName))
    ) {
      throw new Error('[ERROR] 자동차 이름은 영어 또는 한글로 입력해주세요.');
    }

    if (trimCarNames.some((carName) => carName.length > 5)) {
      throw new Error(
        '[ERROR] 자동차 이름은 쉼표(,)를 기준으로 5자 이하로 작성해주세요.'
      );
    }
  },
  validateTryCount(input) {
    if (!/^[0-9]+$/.test(input)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }

    if (Number(input) < 1) {
      throw new Error('[ERROR] 한 번 이상 이동해야 합니다.');
    }
  },
};

export default InputValidator;
