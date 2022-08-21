const baseURL = "http://localhost:8080";

export default (url, data, method) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + url || '',
      data: data || {},
      method: method || 'GET',
      header: { 'content-type': "application/json" },
      timeout: 500,
      success(res) {
        console.log(res);
        if (res.statusCode === 200 && res.data.code === 0) {
          resolve(res.data.data);
        } else {
          reject(res.data || res.errMsg)
        };
      },
      fail(res) {
        reject(res);
      }
    })
  })
};