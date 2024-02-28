// pages/askdoc/askdoc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctors:[
        {id:1,book:"徐东园",author:"主治医师",tj:"擅长：脊柱骨科、肩颈腰痛专科、骨关节病专科", pic:"/images/d1.png"},
        {id:2,book:"洪志楠",author:"医师",tj:"擅长：骨头坏死、髋骨关节发育不良", pic:"/images/d2.png"},
        {id:3,book:"刘鹏",author:"主治医师",tj:"擅长：髋膝关节置换、肩颈腰腿痛", pic:"/images/d3.png"},
        {id:4,book:"黄家纯",author:"医师",tj:"擅长：骨质疏松症、肩颈腰腿痛", pic:"/images/d4.png"},
        {id:5,book:"黎冬梅",author:"主治医师",tj:"擅长：感冒、咳嗽、食滞、发热", pic:"/images/d5.png"},
      ],  
       doctors2:[
        {id:6,book:"廖荣臻",author:"主治医师",tj:"擅长：膝关节病、类风湿关节炎", pic:"/images/d6.png"},
        {id:7,book:"宋雨珂",author:"医师",tj:"擅长：颈椎病、腰椎盘突出症、腰椎管狭窄症", pic:"/images/d7.png"},
        {id:8,book:"李敏",author:"主治医师",tj:"擅长：中医体质调理、中医减重、针灸助孕", pic:"/images/d8.png"},
        {id:9,book:"李瑜欣",author:"主治医师",tj:"擅长：高血压、冠心病", pic:"/images/d9.png"},
        {id:10,book:"官莹玉",author:"医师",tj:"擅长：中西医结合诊治皮肤科疾病", pic:"/images/d10.png"},
      ],
      doctors3:[
        {id:11,book:"宋振杰",author:"主治医师",tj:"擅长：脊柱系统疾病", pic:"/images/d11.png"},
        {id:12,book:"邹新兰",author:"主治医师",tj:"擅长：急性脑血管病、中风治疗及康复", pic:"/images/d12.png"},
        {id:13,book:"郭珊珊",author:"主治中医师",tj:"擅长：运用传统中医理论，治末病，调体质", pic:"/images/d13.png"},
        {id:14,book:"江志扬",author:"副主任医师",tj:"擅长：妇产科", pic:"/images/d14.png"},
        {id:15,book:"李云海",author:"主治医师",tj:"擅长：咳嗽、发热、鼻炎、腹痛、过敏", pic:"/images/d15.png"},
      ],
      doctors4:[
        {id:16,book:"黄东平",author:"主任中医师",tj:"擅长：心血管内科", pic:"/images/d16.png"},
        {id:17,book:"陈文利",author:"主治医师",tj:"擅长：儿科", pic:"/images/d17.png"},
        {id:18,book:"郑维蓬",author:"主治医师",tj:"擅长：膝半月板损伤、前后交叉韧带损伤", pic:"/images/d18.png"},
        {id:19,book:"陈丽芳",author:"主治医师",tj:"擅长：妇产科", pic:"/images/d19.png"},
        {id:20,book:"黄宏兴",author:"主任医师",tj:"擅长：中西医结合诊治骨质疏松症、痛风性关节病", pic:"/images/d20.png"},
      ],
      doctors5:[
        {id:21,book:"王虹",author:"主任医师",tj:"擅长：慢性鼻咽炎、慢性鼻窦炎、中耳炎", pic:"/images/d21.png"},
        {id:22,book:"叶江琳",author:"副主任医师",tj:"擅长：内科", pic:"/images/d22.png"},
        {id:23,book:"乔治强",author:"副主任医师",tj:"擅长：冠心病、高血压、血脂异常、糖尿病", pic:"/images/d23.png"},
        {id:24,book:"简焕玲",author:"主治医师",tj:"擅长：不孕不育、流产相关疾患", pic:"/images/d24.png"},
        {id:25,book:"范琳燕",author:"副主任医师",tj:"擅长：女性经带胎产抗衰、失眠、体质调理", pic:"/images/d25.png"},
      ],
      doctors6:[
        {id:26,book:"余钧雷",author:"主治医师",tj:"擅长：暨南大学外科硕士研究生毕业", pic:"/images/d26.png"},
        {id:27,book:"杨宏光",author:"副主任医师",tj:"擅长：肿瘤科", pic:"/images/d27.png"},
        {id:28,book:"孙世栋",author:"医师",tj:"擅长：骨与关节损伤", pic:"/images/d28.png"},
        {id:29,book:"陈波燕",author:"主治中医师",tj:"擅长：针灸推拿", pic:"/images/d29.png"},
        {id:30,book:"柴生颈",author:"副主任医师",tj:"擅长：膝关节炎、痛风性关节炎、骨头坏死", pic:"/images/d30.png"},
      ],

      currentTab: 0,
      navScrollLeft: 0,
      modleList: [
        {
          "name": "骨科",
          
        },
        {
          "name": "口腔科"
   
        },
        {
          "name": "神经科",
         
        },
        {
          "name": "儿科",
          
        },
        {
          "name":"内科"
        },
        {
          "name":"皮肤科"
        }
        
      ],
    },switchNav(event) {
      var cur = event.currentTarget.dataset.current;
      //每个tab选项宽度占1/5
      var singleNavWidth = this.data.windowWidth / 5;
      //tab选项居中                            
      this.setData({
        navScrollLeft: (cur - 2) * singleNavWidth
      })
      if (this.data.currentTab == cur) {
        return false;
      } else {
        this.setData({
          currentTab: cur
        })
      }
    },
    switchTab(event) {
      var cur = event.detail.current;
      var singleNavWidth = this.data.windowWidth / 5;
      this.setData({
        currentTab: cur,
        navScrollLeft: (cur - 2) * singleNavWidth
      });
    },
    gotodetail:function(e){
      console.log(e)
      let did=e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../doctorDetail/doctorDetail?id='+did,
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