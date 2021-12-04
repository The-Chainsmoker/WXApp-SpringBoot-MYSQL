import request from "../../getdate/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dianzan: false,
    personlist: {}, //个人信息
    loginList: {}, //用户登录信息
    unUserInfo: {}, //未授权登录的信息
    UserInfo: {}, //授权登录的信息
    changImage: {} //封面
  },

  //退出登录
  exitEvent() {
    // 获取登录状态
    let login = wx.getStorageSync('login')
    if (login != '') {
      login = JSON.parse(login)
    }
    console.log(login)
    // 清除登录状态
    login = false
    //不是json数据不需要转成字符串
    wx.setStorageSync('login', login)

    wx.reLaunch({
      url: '/pages/login/login',
    })



  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.persionInformaotin()
    this.getUnLogin()

  },

  //显示未登录的图片
  getUnLogin() {
    wx.getUserInfo({
      success: (res) => {
        this.setData({
          unUserInfo: res.userInfo

        })
      },
      fail: (err) => {
        console.log(err);
      }
    })
  },

  //获取微信昵称、头像
  getUserProfile() {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        let result = res.userInfo
        result.signature = '美好时光'
        this.setData({
          UserInfo: result
        })
        wx.setStorageSync('result', JSON.stringify(result))
      }
    })
  },

  //更换封面
  changCover() {
    let that = this //this不可以在wxAPI函数使用
    wx.chooseImage({
      success(res) {
        that.setData({
          changImage: res
        })
      }
    })
  },

  //获取个人信息
  async persionInformaotin() {
    let list = await request('/person/findAllPerson')
    console.log(list)

    // 获取登录用户信息
    let loginList = JSON.parse(wx.getStorageSync('login'))

    this.setData({
      personlist: list.data.item[0],
      loginList
    })

    // 从本地存储获取微信用户信息
    this.getStorageWxUserInfo()
  },


  getStorageWxUserInfo() {
    if (wx.getStorageSync('result')) {
      let result = JSON.parse(wx.getStorageSync('result'))
      this.setData({
        UserInfo: result
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
  onShow: function () {},

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