import request from "../../utils/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: [], // 视频图片
    videoListData: [], //视频数据
    dianzan: false,
    id: "",
    bid: ""
  },
  praised(event) {
    let id = event.currentTarget.id //找到mv id
    let list = this.data.videoListData; //把videoListData和list指向相同的地址
    let findlist = list.find(item => item.id == id)
    if (findlist.dianzan == null) { //如果findlist.dianzan不存在
      findlist.dianzan = false
    }
    findlist.dianzan = !findlist.dianzan

    // 爱心数量变化
    if (findlist.dianzan) {
      findlist.count = findlist.count + 1
    } else {
      findlist.count = findlist.count - 1
    }

    this.setData({
      videoListData: list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideoList()
  },
  async getVideoList(navId) {
    wx.showLoading({
      title: '正在加载',
    })
    let videoListData = await request('/cloudsearch', {
      keywords: 'The ChainSmokers',
      type: 1004
      // thechainsmokers
    })
    this.setData({
      videoList: videoListData.result.mvs.slice(0, 14)
    })
    this.getVideoUrl() //获取视频地址
  },
  async getVideoUrl() {
    let videoList = this.data.videoList;
    for (var i = 0; i < videoList.length; i++) {
      let videoListUrl = await request('/mv/url', {
        id: videoList[i].id
      })
      // 把每个id对应的对象添加到this.data.videoList
      videoList[i].url = videoListUrl.data.url
    }
    // 爱心数量
    let count = 100
    let videoListcount = videoList.map(item => {
      item.count = count++;
      return item;
    })
    this.setData({
      videoListData: videoListcount
    })
    //关闭消息框
    wx.hideLoading();
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