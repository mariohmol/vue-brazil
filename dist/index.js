import Vue from 'vue'
import JSBrazilFilter from './filter/JsBrazilFilter'
import JSBrazilMask from './mask/JsBrazilMask.js'
import jsValidate from './validate/JsBrazilValidate'

export const JSBrazilValidate = jsValidate;

export default {
    install(Vue, options) {
        Vue.filter('vueBrazil', JSBrazilFilter)
        Vue.directive('brazilmask', JSBrazilMask)
    }
}