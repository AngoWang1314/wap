import * as types from '../types'
import api from '@/fetch/api'

const state = {
    paperList: [],
    paperDetail: {}
}

const actions = {
    getPaperList({commit}, params) {
        api.getPaperList(params).then(res => {
            res.data && commit(types.SET_PAPER_LIST, res.data.data.items)
        }).catch(error => {
            console.error(error);
            uni.showModal({
                title: '提示',
                content: error,
                showCancel: false
            })
        })
    },
    getPaperDetail({commit}, params) {
        api.getPaperDetail(params).then(res => {
            commit(types.SET_PAPER_DETAIL, res.data.data)
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
    paperList: state => state.paperList,
    paperDetail: state => state.paperDetail
}

const mutations = {
    [types.SET_PAPER_LIST] (state, res) {
        state.paperList = Array.isArray(res) ? res : []
    },
    [types.SET_PAPER_DETAIL] (state, res) {
        state.paperDetail = res || {}
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}