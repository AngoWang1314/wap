import * as types from '../types'
import api from '@/fetch/api'

const state = {
    cateList: [],
    subCateList: []
}

const actions = {
    getCateList({commit}, type) {
        api.getCateList(type).then(res => {
            commit(types.SET_CATE_LIST, res.data.data)
            commit(types.CHANGE_HEADER_TAB)
        }).catch(error => {
            console.error(error);
            uni.showModal({
                title: '提示',
                content: error,
                showCancel: false
            })
        })
    },
    changeHeadertabActive({commit}, id) {
        commit(types.CHANGE_HEADER_TAB, id)
    },
    setSubCateList({commit}, id) {
        commit(types.SET_SUB_CATE_LIST, id)
    }
}

const getters = {
    cateList: state => state.cateList,
    subCateList: state => state.subCateList
}

const mutations = {
    [types.SET_CATE_LIST] (state, res) {
        state.cateList = Array.isArray(res) ? res : []

        state.cateList = [{id: 0, name: '推荐'}].concat(state.cateList)
    },
    [types.CHANGE_HEADER_TAB] (state, id = 0) {
        // 默认选中第一个菜单
        // 点击了某个 tab，需要先更新 cateList 数据
        // 然后 tabs 组件通过 getter 获取相应的 headertabList
        state.cateList = state.cateList.map((item, index) => {
            item.isActive = (id === index) || (item.id === id)
            return item
        })
    },
    [types.SET_SUB_CATE_LIST] (state, id = 0) {
        var item = state.cateList.find(element => element.id === id)
        item && (state.subCateList = item.subCateList)
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}