import * as types from '../types'
import api from '@/fetch/api'

const state = {
    recommend: {}
}

const actions = {
    getRecommend({commit}, type) {
        api.getRecommend(type).then(res => {
          commit(types.SET_RECOMMEND, res.data.data)
        }).catch(error => {
            console.error(error);
            uni.showModal({
                title: '提示',
                content: error,
                showCancel: false
            })
        })
    }
}

const getters = {
    recommend: state => state.recommend
}

const mutations = {
    [types.SET_RECOMMEND] (state, res) {
        state.recommend = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}