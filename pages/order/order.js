// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [
      {
        id: 'train',
        name: '火车票',
        open: true
      }, {
        id: 'airplane',
        name: '机票',
        open: false
      }, {
        id: 'bus',
        name: '汽车票',
        open: false
      }
    ]
  },

  /**
   * 点击图标--切换票类型
   */

  itemToggle: function (e) {
    console.info(e.currentTarget.id)
    var id = e.currentTarget.id, navList = this.data.navList;
    for (var i = 0; i < navList.length; i++) {
      if (navList[i].id === id) {
        navList[i].open = !navList[i].open
      } else {
        navList[i].open = false
      }
    }
    this.setData({
      navList: navList
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  handleTap1: function () {
    console.info('handleTap1')
  },
  handleTap2: function () {
    console.info('handleTap2')
  },
  handleTap3: function () {
    console.info('handleTap3')
  },
  handleTap4: function () {
    console.info('handleTap4')
  }
})