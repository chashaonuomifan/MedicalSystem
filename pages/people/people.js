// pages/people/people.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    peoples:{},
    index:"",
    

  },
  goto:function(){
    wx.navigateTo({
      url: '../mydetail/mydetail',
    })
  },
  del: function (e) {
    var index = e.currentTarget.dataset.index;
    var peoples = wx.getStorageSync('peoples');
    var that = this; // 保存当前页面对象的引用
  
    wx.showModal({
      title: '提示',
      content: '是否确认删除',
      success: function(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '删除中...'
          });
          setTimeout(function() {
            peoples.splice(index, 1);
            wx.setStorageSync('peoples', peoples);
            that.setData({
              peoples: peoples
            });
            wx.hideLoading();
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
  
    var peoples=wx.getStorageSync('peoples')
    this.setData({
      peoples:peoples
    })
    console.log(this.data.peoples)

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