import AlphabeticalSort from "util/AlphabeticalSort";

const options = [
  { value: 'build', label: 'build' },
  { value: 'development', label: 'development' },
  { value: 'production', label: 'production' },
  { value: 'lint', label: 'lint' },
  { value: 'info', label: 'info' },
];

export const primaryOptions = options.sort(AlphabeticalSort);

