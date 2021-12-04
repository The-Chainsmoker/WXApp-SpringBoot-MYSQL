import config from "./config";
export default (url, data = {}, method = 'GET', header = {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
}) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: config.host + url,
            data,
            method,
            header, //解决中文乱码
            success: (res) => {

                // console.log('请求成功', res);
                resolve(res.data);
            },
            fail: (err) => {
                console.log('请求失败', err);
                reject(err);
            }
        })
    })
}