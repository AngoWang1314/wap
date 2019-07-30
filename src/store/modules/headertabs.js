import * as types from '../types'
const state = {
    headertabList: [
        {id: 0, name: '推荐', isActive: true, type: 'recommend'},
        {id: 1, name: '居家', isActive: false, type: 'home'},
        {id: 2, name: '服装', isActive: false, type: 'cloth'},
        {id: 3, name: '配件', isActive: false, type: 'parts'},
        {id: 4, name: '餐厨', isActive: false, type: 'cook'},
        {id: 5, name: '洗护', isActive: false, type: 'wash'},
        {id: 6, name: '婴童', isActive: false, type: 'baby'},
        {id: 7, name: '杂货', isActive: false, type: 'messy'},
        {id: 8, name: '饮食', isActive: false, type: 'drink'},
        {id: 9, name: '志趣', isActive: false, type: 'hobby'}
    ],
    typesTabs: [
        {id: 0, name: '推荐', isActive: true, linkTo: '/type/'},
        {id: 1, name: '居家', isActive: false, linkTo: '/type/home'},
        {id: 2, name: '服装', isActive: false, linkTo: '/type/cloth'},
        {id: 3, name: '配件', isActive: false, linkTo: '/type/parts'},
        {id: 4, name: '餐厨', isActive: false, linkTo: '/type/cook'},
        {id: 5, name: '洗护', isActive: false, linkTo: '/type/wash'},
        {id: 6, name: '婴童', isActive: false, linkTo: '/type/baby'},
        {id: 7, name: '杂货', isActive: false, linkTo: '/type/messy'},
        {id: 8, name: '饮食', isActive: false, linkTo: '/type/drink'},
        {id: 9, name: '志趣', isActive: false, linkTo: '/type/hobby'}
    ],
    mylist: [
        {id: 0, name: '全部', isActive: true, linkTo: '/self/mylist'},
        {id: 1, name: '待付款', isActive: false, linkTo: '/mylist/notpay'},
        {id: 2, name: '待发货', isActive: false, linkTo: '/mylist/notsend'},
        {id: 3, name: '已发货', isActive: false, linkTo: '/mylist/allsend'}
    ]
}

const actions = {
    changeHeadertabActive({commit}, id) {
        commit(types.CHANGE_HEADER_TAB, id)
    },
    changeTypestabActive({commit}, id) {
        commit(types.CHANGE_TYPES_TAB, id)
    },
    changeMylistActive({commit}, id) {
        commit(types.CHANGE_MYLIST_TAB, id)
    },
}

const getters = {
  headertabList: state => state.headertabList,
  typesTabs: state => state.typesTabs,
  mylist: state => state.mylist
}

const mutations = {
    [types.CHANGE_HEADER_TAB] (state, id) {
        state.headertabList.forEach(list => {
            list.isActive = false
        })
        state.headertabList[id].isActive = true
    },
    [types.CHANGE_TYPES_TAB] (state, id) {
        state.typesTabs.forEach(list => {
            list.isActive = false
        })
        state.typesTabs[id].isActive = true
    },
    [types.CHANGE_MYLIST_TAB] (state, id) {
        state.mylist.forEach(list => {
            list.isActive = false
        })
        state.mylist[id].isActive = true
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}