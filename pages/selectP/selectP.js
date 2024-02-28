// pages/selectP/selectP.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    peoples:[],
    value:"",
   

  },
  add:function(){
    wx.navigateTo({
      url: '../mydetail/mydetail',
    })

  },
  goto:function(){
    wx.setStorageSync('value', this.data.value);
    console.log(wx.getStorageSync('value'),14)

    var peoples=this.data.peoples
    var value=this.data.value
    var predetails=wx.getStorageSync('predetails');

    let matchedData = peoples.filter(item => item.idcard === value);

// 判断是否有匹配的数据
if (matchedData.length > 0) {
  // 最大下标的对象
  let lastObj = predetails[predetails.length - 1];

  // 将匹配的数据加入最大下标的对象中
  Object.assign(lastObj, {
    idcard: matchedData[0].idcard,
    nickName: matchedData[0].nickName,
    phone: matchedData[0].phone
  });
  wx.setStorageSync('predetails', predetails);
  console.log(778,wx.getStorageSync('predetails'))
}


    
    wx.navigateTo({
      url: '../success/success',
    })
    
  },

  goto2:function(){
    console.log(222)
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      value:e.detail.value
    })
    console.log(this.data.value,66)

   

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