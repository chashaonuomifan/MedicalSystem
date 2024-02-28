// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsData:[],
    min:0,
    max:4
  }, gotoDetail(e){
    let id = e.currentTarget.dataset.id
   
    wx.navigateTo({
      url: '../newsDetail/newsDetail?id='+id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: 'https://apis.tianapi.com/health/index?key=73dbef03d970bfefea9db48d12648fc4&num=50',
      success:res =>{
        console.log(res)
        this.setData({newsData:res.data.result.newslist})
      },
      fail:error =>{
        console.log(err)
      }
    })
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
  onPullDownRefresh: function () {
    success:res =>{
      console.log(res);
    },
    this.onRefresh();
    let min = this.data.min;
    let max = this.data.max;
    min=min+5;
    max=max+5;
    this.setData({
      min:min,
      max:max
    })

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

  },
  onRefresh:function(){
    //导航条加载动画
    wx.showNavigationBarLoading()
    //loading 提示框
    wx.showLoading({
      title: 'Loading...',
    })
    console.log("下拉刷新啦");
    setTimeout(function () {
      wx.hideLoading();
      wx.hideNavigationBarLoading();
      //停止下拉刷新
      wx.stopPullDownRefresh();
    }, 2000)
  },
})