const REGEX = {
  englishOrKorean: (value) => /^[ㄱ-ㅎ|가-힣|a-z|A-Z]+$/.test(value),
  number: (value) => /^[0-9]+$/.test(value),
};

export default REGEX;
