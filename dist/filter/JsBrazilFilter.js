import { maskBr } from 'js-brasil';

/**
 * USAGE: {{ message | filterA('arg1', arg2) }}
 */
export default (value, tipo, args) => {
  return maskBr[tipo](value ? value.toString() : value);
}