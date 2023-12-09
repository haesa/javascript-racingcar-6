import { Random } from '@woowacourse/mission-utils';

export default function createRandomNumber() {
  return Random.pickNumberInRange(0, 9);
}
