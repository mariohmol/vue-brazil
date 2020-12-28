import Vue from 'vue'
import JSBrazilFilter from './filter/JsBrazilFilter'
import JSBrazilMask from './mask/JsBrazilMask.vue'
// import JSBrazilValidate from './validate/JsBrazilValidate.vue'
// import JSBrazilFaker from './faker/JsBrazilFaker.vue'

export default {
    install(Vue, options) {
        Vue.filter('vueBrazil', JSBrazilFilter)
        Vue.component('vue-brazil-mask', JSBrazilMask)
        // Vue.component('vueBrazilValidate', JSBrazilValidate)
        // Vue.component('vueBrazilFaker', JSBrazilFaker)
    }
}