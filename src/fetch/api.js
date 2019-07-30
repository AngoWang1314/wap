//#ifdef H5
    var baseUrl = '/api';
    var server = '';
//#endif
//#ifdef MP-WEIXIN || APP-PLUS
    var server = 'http://cms.dev.dtedu.com';
//#endif
import request from '@/common/request/request'

export function fetchGet(url, params = {}) {
    return request.get(url, {
        data: params
    });
}

export function fetchPost(url, params = {}) {
    return request.post(url, {
        data: params
    });
}

export default {
    getRecommend() {
        return fetchGet(`${baseUrl}/recommend`)
    },
    getCateList() {
        return fetchGet(`${baseUrl}/cateList`)
    },
    getPaperList(params) {
        return fetchGet(`${server}/qlib/exampaper/list`, params)
    },
    getPaperDetail(params) {
        return fetchGet(`${server}/qlib/entering-init/paper-question-list`, params)
    }
}