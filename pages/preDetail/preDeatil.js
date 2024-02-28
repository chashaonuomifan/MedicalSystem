// pages/preDetail/preDeatil.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    predetail:{},
    index:"",

  },
  del: function () {
    var index = this.data.index;
    var predetails = wx.getStorageSync('predetails')
    wx.showModal({
      title: '提示',
      content: '是否确认退号',
      success: function (res) {
        if (res.confirm) {
          wx.showLoading({
            
            title: '退号中...',
          });
          setTimeout(function () {
            predetails.splice(index, 1);
            wx.setStorageSync('predetails', predetails);
            wx.hideLoading(); 
            wx.navigateBack({
              delta: 1
            });
          }, 1000); 
        } else if (res.cancel) {
          console.log('取消');
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var index=options.index;
    console.log(66,index)
    var predetails=wx.getStorageSync('predetails')
    var predetail=predetails[index]
    this.setData({
      predetail:predetail,
      index:index
    })
    console.log(predetail)

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