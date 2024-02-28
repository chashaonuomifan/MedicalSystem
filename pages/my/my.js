const app = getApp();
Page({
  onChooseAvatar(e) {
    const avatarUrl = e.detail.avatarUrl;
    console.log(avatarUrl);
    this.setData({
      login: {
        show: true,
        avatar: avatarUrl,
      }
    });
  },

  getUserInfo(e) {
    const userInfo = e.detail.userInfo;
    if (userInfo) {
      this.setData({
        login: {
          show: true,
          avatar: userInfo.avatarUrl,
        }
      });
    }
  },
  showAvatarPopup() {
    this.setData({
      showPopup: true,
    });
  },
  closePopup() {
    this.setData({
      showPopup: false,
    });
  },

  /**
   * 页面的初始数据
   */
  data: {
    login: {
      show: false,
      avatar: 'https://img0.baidu.com/it/u=3204281136,1911957924&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    },
    isLoginPopupVisible: false, // 新增变量保存登录弹窗的显示状态
  },
  // 登录监听
  chooseAvatar(e) {
    this.setData({
      login: {
        show: true,
        avatar: e.detail.avatarUrl,
      },
    });
  },
  // 基本信息
  basicClick() {
    console.log('基本信息监听');
    wx.navigateTo({
      url: '../people/people',
    });
  },
  // 匿名反馈
  feedbackClick() {
    wx.navigateTo({
      url: '/pages/ShouCang/ShouCang',
    });
  },
  // 关于我们
  aboutClick() {
    console.log('关于我们监听');
  },
  // 退出监听
  exitClick() {
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确定退出登录吗？',
      success(res) {
        if (res.confirm) {
          that.setData({
            login: {
              show: false,
              avatar: 'https://img0.baidu.com/it/u=3204281136,1911957924&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            },
          });
        }
      },
    });
  },
  // 登录确认弹窗-取消按钮点击事件
  cancelLogin() {
    this.setData({
      isLoginPopupVisible: false, // 关闭登录确认弹窗
    });
    wx.showToast({
      title: '登录失败',
      icon: 'none',
    });
  },
  // 登录确认弹窗-确认按钮点击事件
  confirmLogin() {
    this.setData({
      isLoginPopupVisible: false, // 关闭登录确认弹窗
      login: {
        show: true,
        avatar: '../../images/logo.jpg', // 更新为登录成功后的头像链接
      },
    });
    wx.showToast({
      title: '登录成功',
      icon: 'success',
    });
  },

  // 立即登录按钮点击事件
  loginClick() {
    this.setData({
      isLoginPopupVisible: true, // 显示登录确认弹窗
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.setData({
        login: {
          show: true,
          avatar: userInfo.avatarUrl,
        },
      });
    }
    this.setData({
      isLoginPopupVisible: false, // 添加变量保存登录弹窗的显示状态
    });
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

  },
});
