// pages/doctorDetail/doctorDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateData: [
      { "time": "9:00" },
      { "time": "11:00" },
      { "time": "14:00" },
      { "time": "13:00" },
      { "time": "17:00" },
      ],
      date:"",
      doctors:[
        {id:1,book:"徐东园",author:"主治医师  教授",tj:"脊柱骨科、肩颈腰痛专科、骨关节病专科", pic:"/images/d1.png",jj:"广东省中西医结合学会呼吸病专业委员会第二届委员会委员，从事呼吸内科临床、科研、教学工作近30年。"},
        {id:2,book:"洪志楠",author:"医师 副教授",tj:"骨头坏死、髋骨关节发育不良", pic:"/images/d2.png",jj:"擅长内科疾病诊治，对心脏病、高血压等疾病有丰富经验，为患者提供个性化的治疗方案。"},
        {id:3,book:"刘鹏",author:"主治医师",tj:"髋膝关节置换、肩颈腰腿痛", pic:"/images/d3.png",jj:"专注儿科医疗工作多年，对小儿常见病、多发病有深刻理解，善于与孩子建立良好的信任关系"},
        {id:4,book:"黄家纯",author:"医师",tj:"骨质疏松症、肩颈腰腿痛", pic:"/images/d4.png",jj:"外科专家，擅长骨折、创伤、关节炎等疾病的手术治疗，精通微创手术技术。"},
        {id:5,book:"黎冬梅",author:"主治医师",tj:"感冒、咳嗽、食滞、发热", pic:"/images/d5.png",jj:"中医专家，精通中医药治疗理念，擅长针灸、推拿等中医治疗技术，注重全人健康的平衡。"},
        {id:6,book:"廖荣臻",author:"主治医师",tj:"膝关节病、类风湿关节炎", pic:"/images/d6.png",jj:"眼科专家，对眼科疾病诊断和治疗有着独到见解，为患者提供个性化眼部护理建议。"},
        {id:7,book:"宋雨珂",author:"医师",tj:"颈椎病、腰椎盘突出症、腰椎管狭窄症", pic:"/images/d7.png",jj:"皮肤科医生，对常见的皮肤病、过敏等疾病有丰富的诊疗经验，注重患者的皮肤护理指导。"},
        {id:8,book:"李敏",author:"主治医师",tj:"中医体质调理、中医减重、针灸助孕", pic:"/images/d8.png",jj:"神经科医生，治疗头痛、失眠、神经病等疾病，关注患者的心理健康和生活调节。"},
        {id:9,book:"李瑜欣",author:"主治医师",tj:"高血压、冠心病", pic:"/images/d9.png",jj:"眼科专家，对眼科疾病诊断和治疗有着独到见解，为患者提供个性化眼部护理建议。"},
        {id:10,book:"官莹玉",author:"医师",tj:"中西医结合诊治皮肤科疾病", pic:"/images/d10.png",jj:"擅长内科疾病诊治，对心脏病、高血压等疾病有丰富经验，为患者提供个性化的治疗方案。"},
      ],
      doctors2:{},
      num:"",

  },
  bindDateChange: function(e) {
    console.log(e.detail.value)
    let dd=this.data.date
    console.log(dd)
    this.setData({
      date: e.detail.value,
      dd:e.detail.value
    })
  },
  guahao:function(e){
    let app=getApp();
    var data = app.Data.num; 
    console.log(data)
    data++;
    app.Data.num=data;
    wx.setStorageSync('data', data);
    this.setData({
      num:data
    }) 
    wx.navigateTo({
      url: '../../pages/selectP/selectP' 
    });
    var dname=this.data.doctors2.book
    var time=e.currentTarget.dataset.time;
    var date=this.data.date
    var num=this.data.num
    var predetail={
      dname:dname,
      time:time,
      date:date,
      num:num,
    }
    var predetails=wx.getStorageSync('predetails');
    predetails.push(predetail)
    wx.setStorageSync('predetails', predetails)
    console.log(66,JSON.stringify(predetails))

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()
    const dateStr = `${year}-${month}-${day}`
    console.log(options.id)
    this.setData({
      date: dateStr,
      doctors2:this.data.doctors[options.id-1]
    })
    let predetails = wx.getStorageSync('predetails');
    if (!predetails) {
      predetails = [];
      wx.setStorageSync('predetails', predetails);
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