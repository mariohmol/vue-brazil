import Vue from 'vue'
import UserPop from './UserPop.vue'

export default {
    install(Vue, options) {
        Vue.component('user-pop', UserPop)
    }
}