import { validateBr } from "js-brasil";

const updateValue = (el, type) => {
  let value = el.value;  
  if(type && validateBr[type] ){
    return validateBr[type](value ? value.toString() : value);
  }
}

export default function JSBrazilValidate (e, errors = []){
    for (let item of e.target) {
        const type = item.getAttribute('data-brtype');
        const error = updateValue(item, type);
        if(!error){
            const name = item.getAttribute('id') || item.getAttribute('name');
            errors.push(name + ' inválido')
        }
    }
}
