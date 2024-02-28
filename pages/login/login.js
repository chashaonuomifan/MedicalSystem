Page({
  formSubmit: function(e) {
    var username = e.detail.value.username;
    var password = e.detail.value.password;
    
    if (username === 'admin' && password === 'admin') {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000,
        success: function() {
          // 登录成功后跳转到tabbar页面中的index页面
          wx.switchTab({
            url: '/pages/my/my',
            success: function() {
              // 获取当前页面栈
              var pages = getCurrentPages();
              // 遍历页面栈，找到上一个页面（my页面）
              for (var i = pages.length - 1; i >= 0; i--) {
                if (pages[i].route === 'pages/my/my') {
                  // 修改上一个页面的数据
                  pages[i].setData({
                    login: {
                      show: true,
                      avatar:'/images/logo.jpg',
                    }
                  });
                  break;
                }
              }
            }
          });
        }
      });
    } else {
      wx.showToast({
        title: '用户名或密码错误',
        icon: 'none',
        duration: 2000
      });
    }
  }
});
