import { maskBr } from "js-brasil";

const updateValue = (el, binding) => {
  let value = el.value;  
  console.log(el.value, 'init val updateValue')
  const {type} = binding.value;
  if(type &&  maskBr[type] ){
     // store current positions in variables
     var start = el.selectionStart,
     end = el.selectionEnd;
    //  value.replace('_', '')
    const newValue = maskBr[type](value ? value.toString() : value);

    // const diff= value.length -
    const pos = newValue.indexOf('_');
    console.log(`new -->`, newValue, start,end,pos)
    el.value=newValue;
    el.setSelectionRange(pos, pos);
  }
}

export default {
  bind: function (el, binding, vnode) {
    el.addEventListener("keyup", () =>{
      updateValue(el, binding)
    });
    updateValue(el, binding)
  },
  // componentUpdated: function (el, binding, vnode) {},
  // update: function (el, binding, vnode) {},
  // When the bound element is inserted into the DOM...
  inserted: function (el) {}
}
