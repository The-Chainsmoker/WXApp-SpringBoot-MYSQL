// pages/comment/comment.js
import request from "../../getdate/request"
import dataFormat from "../../utils/dataFormat"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    userlist: [], //用户信息
    content: '', //评论信息
    location: '', //当前位置
    image: [], //图片
    vedio: [{
      tempFilePath: false
    }] //视频
  },
  // 获取文本
  inputEvent(event) {
    this.setData({
      content: event.detail.value
    })
  },
  //获取定位
  getPosition() {
    let that = this
    wx.chooseLocation({
      success: (res) => {
        if (res.address == "") {
          wx.showToast({
            title: '还没定位哦!',
            icon: 'none'
          })
        } else {
          wx.showToast({
            title: '定位成功',
            icon: 'none'
          })
        }
        that.setData({
          location: res.address + res.name
        })
      }
    })
  },

  //获取视频或图片
  getMedia() {
    let that = this
    wx.chooseMedia({
      count: 9,
      mediaType: ['image', 'video'],
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      success(res) {
        if (res.type == "image") {
          wx.showToast({
            title: '上传了' + res.tempFiles.length + '图片',
            icon: 'none'
          })
          that.setData({
            image: res.tempFiles
          })
        }
        if (res.type == 'video') {
          wx.showToast({
            title: '上传了1个视频',
            icon: 'none'
          })
          that.setData({
            vedio: res.tempFiles
          })
        }
      }
    })
  },

  //提交文本
  async submitEvent() {
    let {
      content,
      location,
      image,
      vedio
    } = this.data
    if (location == "") {
      wx.showToast({
        title: '定位在发表哦！',
        icon: 'none'
      })
    } else if (content == "") {
      wx.showToast({
        title: '输入内容在发表哦！',
        icon: 'none'
      })
    } else {
      var login = JSON.parse(wx.getStorageSync('login'))
      var changeImage = JSON.stringify(image);
      //把发表评论信息存入对象中
      login.id = 0
      login.power = false;
      login.dianzan = 0;
      login.content = content;
      login.video = vedio[0].tempFilePath;
      login.image = changeImage;
      login.address = location

      wx.request({
        url: 'http://localhost:8080/user/adduser',
        data: login,
        method: "POST",
        success: (res) => {
          wx.showToast({
            title: '发表成功',
            icon: 'none'
          })
          console.log(res.data)
          // 更新用户信息
          this.getUserInformation()
        }
      })

      //清除内容,关闭评论框
      this.setData({
        content: '',
        show: false,
        image: [],
        vedio: [{
          tempFilePath: false
        }]
      })

    }
  },

  //输入文本显示
  clickEvent() {
    let show = !this.data.show;
    this.setData({
      show
    })
  },
  //输入文本关闭
  cancleEvent() {
    let show = this.data.show
    if (show) {
      show = !this.data.show
    }
    this.setData({
      show
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInformation()
  },
  //获取用户的全部信息
  async getUserInformation() {
    let user = await request('/user/findAllUser');
    let list = user.data.item;
    //得到之前的用户信息
    let name = wx.getStorageSync('name')
    if (name != "") {
      name = JSON.parse(wx.getStorageSync('name'))
    }
    //得到现在的用户信息
    let login = JSON.parse(wx.getStorageSync('login'))
    //现在和之前的用户名字不一致
    if (name.name != login.name) {
      name = login
      // 储存现在的用户信息
      wx.setStorageSync('name', JSON.stringify(name))
      //取消全部爱心的选中状态，加入头像
      var b = 1
      for (var i = 0; i < list.length; i++) {
        if (b > 4)
          b = 1
        list[i].headImage = '../../static/images/nvsheng/nvsheng' + b + '.png'
        b++
        list[i].sign = list[i].name
        list[i].power = false
        //时间转换格式
        list[i].gmtCreate = dataFormat(list[i].gmtCreate)

        // 把全部图片路径的字符串转换成JSON数据
        if (list[i].image) {
          list[i].image = JSON.parse(list[i].image)
        }
      }
    } else {
      //加入头像
      var b = 1
      for (var i = 0; i < list.length; i++) {
        if (b > 4)
          b = 1
        list[i].headImage = '../../static/images/nvsheng/nvsheng' + b + '.png'
        b++
        list[i].sign = list[i].name

        //时间转换格式
        list[i].gmtCreate = dataFormat(list[i].gmtCreate)

        // 把全部图片路径的字符串转换成JSON数据
        if (list[i].image) {
          list[i].image = JSON.parse(list[i].image)
        }
      }
    }
    this.setData({
      userlist: list
    })
  },

  // 点赞
  async praised(event) {
    let id = event.currentTarget.id //找到用户名字
    let list = this.data.userlist; //找到所有用户信息
    let findlist = list.find(item => item.id == id) //找到点中那组用户信息
    findlist.power = !findlist.power
    //获取选中的用户信息
    let record = await request('/user/getUser/' + id);
    record.data.user.power = findlist.power
    // 爱心数量变化
    if (findlist.power) {
      findlist.dianzan = findlist.dianzan + 1
      // 更新数组信息
      record.data.user.dianzan = findlist.dianzan
    } else {
      findlist.dianzan = findlist.dianzan - 1
      // 更新数组信息
      record.data.user.dianzan = findlist.dianzan
    }
    //更新数据库
    wx.request({
      url: 'http://localhost:8080/user/updateUSer',
      data: record.data.user,
      method: "POST",
      //heder不设置都不影响
      header: {
        'content-type': 'application/json;charset=utf-8',
      },
      success: (res) => {
        console.log(res.data)
      }
    })

    this.setData({
      userlist: list
    })
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