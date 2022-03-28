import { maskBr } from 'js-brasil';

/**
 * USAGE: {{ message | filterA('arg1', arg2) }}
 */
export default (value, tipo, _args) => {
  if(!maskBr[tipo]){
    console.log(maskBr)
    console.error('VueBrasil: Type does not exists: ' + tipo)
    return
  }
  return maskBr[tipo](value ? value.toString() : value);
}