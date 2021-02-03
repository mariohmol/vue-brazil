import Vue from 'vue'
import JSBrazilFilter from './filter/JsBrazilFilter'
import JSBrazilMask from './mask/JsBrazilMask.js'
// import JSBrazilValidate from './validate/JsBrazilValidate.vue'
// import JSBrazilFaker from './faker/JsBrazilFaker.vue'

export default {
    install(Vue, options) {
        console.log(JSBrazilMask)
        Vue.filter('vueBrazil', JSBrazilFilter)
        Vue.directive('brazilmask', JSBrazilMask)
        // Vue.component('vueBrazilValidate', JSBrazilValidate)
        // Vue.component('vueBrazilFaker', JSBrazilFaker)
    }
}