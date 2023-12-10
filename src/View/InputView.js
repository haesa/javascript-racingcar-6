import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/index';
import InputValidator from '../Validator/InputValidator';

const InputView = {
  async readCarNames() {
    const input = await Console.readLineAsync(INPUT.carNames);
    InputValidator.validateCarNames(input);
    return input.split(',').map((name) => name.trim());
  },
  async readTryCount() {
    const input = await Console.readLineAsync(INPUT.tryCount);
    InputValidator.validateTryCount(input);
    return Number(input);
  },
};

export default InputView;
