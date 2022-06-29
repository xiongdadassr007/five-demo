import axios from 'axios'

const request = axios.create({
    baseURL: 'https://applet-base-api-t.itheima.net'
})

export const getData = function(_page, _limit) {
    return request.get('/articles', {
        params: {
            _page,
            _limit
        }
    })
} 