// pages/newsDetail/newsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    newsDetail:{},
  },
  getNews(id){
    let newsDetail = this.data.newsDetail
    wx.request({
      url: 'https://apis.tianapi.com/health/index?key=73dbef03d970bfefea9db48d12648fc4&num=50',
      success:res =>{
        console.log(res.data.result.newslist);
        let news = res.data.result.newslist
        for(let i = 0;i < news.length; i++){
          if(news[i].id == id){
            this.setData({newsDetail:news[i]})
          }
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNews(options.id);
    console.log(options.id)
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