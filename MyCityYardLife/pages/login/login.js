// pages/login/login.js
import request from "../../getdate/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    password: '',
    status: false //用户密码输入状态
  },
  //让phone,password获取数据
  handleInput(event) {
    // let type = event.currentTarget.id;
    let type = event.currentTarget.dataset.type;
    this.setData({
      //先识别name,password再传入值xeg
      [type]: event.detail.value
    })
    let {
      name,
      password
    } = this.data
    if (name != "" && password != "") {
      this.setData({
        status: true
      })
    } else {
      this.setData({
        status: false
      })
    }
  },
  async login() {
    let {
      name,
      password
    } = this.data;
    if (!name) {
      wx.showToast({
        title: '用户名不能为空！',
        icon: 'none'
      })
      return;
    }
    if (!password) {
      wx.showToast({
        title: '密码不能为空！',
        icon: 'none'
      })
      return true;
    }
    let result = await request('/user/findAllUser');
    let list = result.data.item
    let login = false
    for (var i = 0; i < list.length; i++) {
      if (list[i].name == name && list[i].password == password) {
        login = true

        // 存储登录状态
        wx.setStorageSync('login', JSON.stringify(list[i]))
      }
    }
    if (login) {

      wx.reLaunch({
        url: '/pages/person/person',
      })
    } else {
      wx.showToast({
        title: '用户信息有误 ！',
        icon: 'none'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let login = wx.getStorageSync('login')
    if (login) {
      wx.reLaunch({
        url: '/pages/person/person',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})