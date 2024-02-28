// pages/medicine_detail/medicine_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:'',
      description:'',
      src:'',
      use:'',
      change:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */


  onLoad(options) {
    let name = options.name 
    let src = options.src
    let description = options.description
    let use = options.use
    this.setData({
        name:name,
        src:src,
        description:description,
        use:use
    })
   
  },
  TapShoucang(e){
    let name =this.data.name
    let src = this.data.src
    let description = this.data.description
    let use = this.data.use
    let change = this.data.change
    // const data={
    // name :this.data.name,
    // src :this.data.src,
    // description : this.data.description,
    // use : this.data.use,
    // change : this.data.change
    // }
   
    if(change==false){
     let change=true
     this.setData({
      change:change
     })
     wx.showToast({
      title: '收藏成功',
      icon: 'success'
    });

    const data = {
      name: this.data.name,
      src: this.data.src,
    };
    let collectDataList = wx.getStorageSync('collectDataList') || [];
    collectDataList.push(data);
    wx.setStorageSync('collectDataList', collectDataList);
    
    //  wx.setStorageSync('name',this.data.name)
    //  wx.setStorageSync('src',this.data.src)
    }else{
      let change=false
      this.setData({
        change:change
       })
       wx.showToast({
        title: '取消收藏',
        icon: 'success'
      });
    }
    
    
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