// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dates2:[],
    predetails:[],

  },
  gotopreDetail:function(e){
    const index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../preDetail/preDeatil?index='+index,
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    

    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const predetails = wx.getStorageSync('predetails');
    this.setData({
      predetails: predetails
    });
    console.log(77,JSON.stringify(this.data.predetails))

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})