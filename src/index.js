import Vue from 'vue'
import JSBrazilFilter from './filter/JSBrazilFilter'
import JSBrazilMask from './mask/JSBrazilMask.vue'
// import JSBrazilValidate from './validate/JSBrazilValidate.vue'
// import JSBrazilFaker from './faker/JsBrazilFaker.vue'

export default {
    install(Vue, options) {
        console.log({JSBrazilFilter})
        Vue.filter('vueBrazil', JSBrazilFilter)
        Vue.component('vue-brazil-mask', JSBrazilMask)
        // Vue.component('vueBrazilValidate', JSBrazilValidate)
        // Vue.component('vueBrazilFaker', JSBrazilFaker)
    }
}