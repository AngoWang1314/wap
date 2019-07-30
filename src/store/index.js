import Vue from 'vue'
import Vuex from 'vuex'

import recommend from './modules/recommend'
import cateList from './modules/cateList'
import paperList from './modules/paperList'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        recommend,
        cateList,
        paperList
    }
})