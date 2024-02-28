// pages/Search/Search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    medicineList: [
      {name:"阿奇霉素",src:"/images/medicine/阿奇霉素.jpg",description:"本品适用于敏感细菌所引起的下列感染：支气管炎、肺炎等下呼吸道感染；皮肤和软组织感染；急性中耳炎；鼻窦炎、咽炎、扁桃体炎等上呼吸道感染。",use:"成人用量沙眼衣原体或敏感淋病奈瑟菌所致性传播疾病，单次口服1.0g。对其他感染的治疗：第1日，0.5g顿服，第2-5日，一日0.25g顿服；或一日0.5g顿服，连服3日。"},
      {name:"头孢地尼",src:"/images/medicine/头孢地尼.jpg",description:"头孢地尼片：用于敏感菌所致的呼吸系统、泌尿系统、耳鼻喉科及皮肤、软组织感染等。",use:"成人用法与用量常规剂量抗感染：口服给药， 一次100mg，一日3次。肾功能不全时剂量根据肾功能损害的严重程度酌情减量及延长给药间隔时间。"},
      {name:"阿西莫林",src:"/images/medicine/阿西莫林.jpg",description:"适应症为阿莫西林适用于敏感菌(不产β内酰胺酶菌株)所致的下列感染：1.溶血链球菌、肺炎链球菌、葡萄球菌或流感嗜血杆菌所致中耳炎、鼻窦炎、咽炎、扁桃体炎等上呼吸道感染。2.大肠埃希菌、奇异变形杆菌或粪肠球菌所致的泌尿生殖道感染。3.溶血链球菌、葡萄球菌或大肠埃希菌所致的皮肤软组织感染。4.溶血链球菌、肺炎链球菌、葡萄球菌或流感嗜血杆菌所致急性支气管炎、肺炎等下呼吸道感染。5.急性单纯性淋病。",use:"口服。成人一次0.5g，每6～8小时1次，一日剂量不超过4g。小儿一日剂量按体重20～40mg/Kg，每8小时1次；3个月以下婴儿一日剂量按体重30mg/Kg，每12小时1次。"},
      {name:"红霉素",src:"/images/medicine/红霉素.png",description:"本品可用于化脓性链球菌引起的咽炎及扁桃体炎；敏感细菌所致的鼻窦炎、中耳炎、急性支气管炎、慢性支气管炎急性发作以及皮肤软组织感染；",use:"空腹口服，一般疗程为5-12日。成人一次150mg（1片），一日2次；也可一次300mg（2片），一日1次。严重肝硬化者的半衰期延长至正常水平2倍以上。"},
      {name:"阿司匹林",src:"/images/medicine/阿司匹林.png",description:"阿司匹林一般用于解热镇痛的剂量较少，不会引起不良反应，但长期大量用药则容易出现副作用，而大部分止痛药均有阿司匹林。较常见的副作用有恶心、呕吐、上腹部不适或疼痛，较少或很少见的有胃肠道出血或诱发溃疡、支气管痉挛过敏反应、皮肤过敏及肝、肾损害等。",use:"解热、镇痛，一次0.3～0.6g，一日3次，必要时每4小时1次;抗风湿，一日3～5g（急性风湿热可用到7～8g），分4次口服;抑制血小板聚集，尚无明确用量，多数主张应用小剂量，如50～150mg，每24小时 1次."},
      {name:"布洛芬",src:"/images/medicine/布洛芬.png",description:"布洛芬（Ibuprofen）为解热镇痛类，非甾体抗炎药。本品通过抑制环氧化酶，减少前列腺素的合成，产生镇痛、抗炎作用；通过下丘脑体温调节中枢而起解热作用。",use:"抗风湿，口服：0.4～0.6克/次，3～4次/日;用于急性的轻、中度疼痛和发热，0.2～0.4克/次，每4～6小时一次，最大限量为2.4克/日。缓释胶囊：成人及12岁以上儿童，0.3～0.6克/次，2次/日。"},
      {name:"板蓝根颗粒",src:"/images/medicine/板蓝根.png",description:"板蓝根颗粒，清热解毒，凉血利咽。用于肺胃热盛所致的咽喉肿痛、口咽干燥；急性扁桃体炎见上述证候者",use:"每袋装10克（相当于饮片14克）;开水冲服。一次半～1袋（5～10克），一日3～4次。"},
      {name:"小柴胡颗粒",src:"/images/medicine/小柴胡.png",description:"解表散热，疏肝和胃。用于外感病，邪犯少阳证，症见寒热往来、胸胁苦满，食欲不振、心烦喜呕、口苦咽干。",use:"开水冲服，一次1-2袋，一日3次。"},
      {name:"银翘解毒片",src:"/images/medicine/银翘.png",description:"主要用于治疗风热感冒、重型发热、轻度怕冷、头晕头痛、鼻塞咽痛、全身无力、口渴思饮。",use:"成人每次服4-6片，日服2次，小儿1-2岁每次1片，3-9岁每次2片，9-15岁每次4片。"},
      {name:"拉米夫定",src:"/images/medicine/拉米夫定.png",description:"拉米夫定是一种核苷类似物，与其他抗逆转录病毒药物联合使用，可用于治疗人类免疫缺陷病毒感染。",use:"慢性乙型肝炎患者成人剂量，一次100mg，每日口服1次；2-17岁儿童患者，口服，每次3mg/kg，一日1次，每日最大剂量100mg。"},
      {name:"阿昔洛韦",src:"/images/medicine/拉米夫定.png",description:"防治单纯疱疹病毒（HSV-1，HSV-2）和水痘-带状疱疹病毒（VZV）引起的皮肤黏膜感染和疱疹性脑炎。",use:"口服成人常用量生殖器疱疹初治和免疫缺陷者皮肤、黏膜单纯疱疹：一次200mg，一日5次，共10日；或一次400mg，一日3次，共5日。"},
    ],
    filteredMedicineList: [],
    keyword: ""
  },
  onInput(event) {
    const keyword = event.detail.value;
    if (keyword === '') {
      this.setData({
        filteredMedicineList: []
      })
    } else {
      const matchedMedicines = this.data.medicineList.filter(medicine => medicine.name.includes(keyword));
      this.setData({
        filteredMedicineList: matchedMedicines
      });
    }
  },
  onClear() {
    this.setData({
      keyword: "",
      filteredMedicineList: []
    });
  },
  toDetail(e){
    let name = e.currentTarget.dataset.name
    let src = e.currentTarget.dataset.src
    let description = e.currentTarget.dataset.description
    let use = e.currentTarget.dataset.use
    console.log(e)
    wx.navigateTo({
      url: '/pages/medicine_detail/medicine_detail?name='+name+'&src='+src+'&description='+description+'&use='+use
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