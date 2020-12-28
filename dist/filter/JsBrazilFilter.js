import { maskBr } from 'js-brasil';

// USAGE: {{ message | filterA('arg1', arg2) }}
export default (value, tipo, args) => {
  console.log(value, tipo)
  return maskBr[tipo](value);
}