// index.js
Page({
  data: {
    
    show: false,
    hobby: false,
    avatar: 'https://img0.baidu.com/it/u=345359896,661384602&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    nickName: '布吉岛',
    phone: '18866668888',
    // 编辑时临时数据
    tempList: {
      avatarTemp: 'https://img0.baidu.com/it/u=345359896,661384602&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      nameTemp: '布吉岛',
      phoneTemp: '18866668888',
    },
    arraySex: ['男', '女'],
    indexSex: 0,
    arrayMarry: ['未婚', '已婚'],
    indexMarry: 0,
    arrayEducation: ['小学', '初中', '高中', '大专', '本科', '研究生'],
    indexEducation: 4,
    attrImg: [],
    hobbyVal: '',
    labelList: []
  },
  editClick() {
    this.setData({
      show: true,
      hobby: false
    })
  },
  // 添加兴趣爱好【注意：itemList最长6】
  addHobbyClick() {
    var that = this;
    var list = ['自定义', '打篮球', '打羽毛球', '游泳', '爬山', '踢足球'];
    var attr = this.data.labelList;
    wx.showActionSheet({
      itemList: list,
      success(res) {
        if (res.tapIndex == 0) {
          that.setData({
            show: true,
            hobby: true
          })
        } else {
          that.setData({
            labelList: attr.concat(list[res.tapIndex])
          })
        }
      }
    })
  },
  // 添加证件照头像、证书【type为0则为上传证件照头像，反之为证书图片】
  selectImage(e) {
    var that = this;
    var type = e.currentTarget.dataset.tag;
    var attr = this.data.attrImg;
    wx.chooseMedia({
      count: type == '0' ? 1 : 6,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        if (type == '0') {
          that.setData({
            'tempList.avatarTemp': res.tempFiles[0].tempFilePath
          })
        } else {
          var str = [];
          var list = res.tempFiles;
          for (var i = 0; i < list.length; i++) {
            str.push(list[i].tempFilePath);
          }
          that.setData({
            attrImg: attr.concat(str)
          })
        }
      }
    })
  },
  // 长安删除图片
  longtapDeleteImg(e) {
    let that = this;
    let tag = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '确定删除该图片吗？',
      complete: (res) => {
        if (res.confirm) {
          var list = that.data.attrImg;
          list.splice(tag, 1);
          that.setData({
            attrImg: list
          })
        }
      }
    })
  },
  // 图片查看
  previewClick(e) {
    let path = e.currentTarget.dataset.url;
    wx.previewImage({
      current: path, // 当前显示图片的http链接
      urls: this.data.attrImg // 需要预览的图片http链接列表
    })
  },
  // 兴趣爱好输入监听
  inputHobbyClick(e) {
    this.setData({
      hobbyVal: e.detail.value
    })
  },
  // 昵称姓名输入监听
  inputNick(e) {
    this.setData({
      'tempList.nameTemp': e.detail.value
    })
  },
  // 联系电话输入监听
  inputPhone(e) {
    this.setData({
      'tempList.phoneTemp': e.detail.value
    })
  },
  // 长安删除兴趣爱好标签
  longtapDeleteLabel(e) {
    let that = this;
    let tag = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '确定删除该爱好标签吗？',
      complete: (res) => {
        if (res.confirm) {
          var list = that.data.labelList;
          list.splice(tag, 1);
          that.setData({
            labelList: list
          })
        }
      }
    })
  },
  // 取消监听
  cancelMask() {
    this.setData({
      show: false,
      hobbyVal: '',
      'tempList.avatarTemp': this.data.avatar,
      'tempList.nameTemp': this.data.nickName,
      'tempList.phoneTemp': this.data.phone
    })
  },
  // 确定监听
  defineMask() {
    if (this.data.hobby) {
      if (this.data.hobbyVal == '') {
        wx.showToast({
          title: '兴趣爱好不能为空哦',
          icon: 'none'
        })
      } else {
        var attr = this.data.labelList;
        this.setData({
          show: false,
          hobbyVal: '',
          labelList: attr.concat(this.data.hobbyVal)
        })
      }
    } else {
      this.setData({
        show: false,
        avatar: this.data.tempList.avatarTemp,
        nickName: this.data.tempList.nameTemp,
        phone: this.data.tempList.phoneTemp
      })
    }
  },
  // 提交
  formSubmit(e) {
    let params = e.detail.value;
    params.avatar = this.data.avatar;
    params.nickName = this.data.nickName;
    params.phone = this.data.phone;
    // 若仅仅是获取下标
    // params.sex=this.data.indexSex;
    // params.marry=this.data.indexMarry;
    // params.education=this.data.indexEducation;
    // 若仅仅是获取下标对应的文本
    params.sex = this.data.arraySex[this.data.indexSex];
    params.marry = this.data.arrayMarry[this.data.indexMarry];
    params.education = this.data.arrayEducation[this.data.indexEducation];
    params.certificateImg = this.data.attrImg;
    params.hobbyList = this.data.labelList;
    console.log('获取提交的参数信息', 66,params)
   this.setData({
     people:params
   })
   console.log(12,this.data.people)
   var peoples=wx.getStorageSync('peoples');
   peoples.push(this.data.people)
    wx.setStorageSync('peoples', peoples)
    wx.showToast({
      title: '提交监听',
    })
    console.log(66,JSON.stringify(peoples))
    wx.navigateBack({
      delta: 1
    });
  },




  onLoad(options){
    let peoples = wx.getStorageSync('peoples');
    if (!peoples) {
      peoples = [];
      wx.setStorageSync('peoples', peoples);
    }
  }
})
