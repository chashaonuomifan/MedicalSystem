Page({
  data: {
    patientName: '张三', // 患者姓名
    patientGender: '男', // 患者性别
    patientAge: '18', // 患者年龄
    sections: [ // 病历各个部分
      {title: '主诉', content: '咽下梗阻感或进行性吞咽困难”。 病人患急性细菌性痢疾，自述:下腹痛， 想解大便，但是到厕所后又不一定解出，一会又想解等。 主诉写“腹痛，腹泻，里急后重感”。'},
      {title: '既往病史', content: '既往史：平素身体健康状况，否认结核、肝炎、疟疾等传染病及传染病密切接触史，否认“高血压”病史（时间、治疗及控制情况）、否认“糖尿病”病史，否认“心脏病”病史，否认“脑血管疾病”病史，否认输血史，无献血史，无手术、外伤史（何时、何地及治疗情况），否认药物过敏史（过敏表现，缓解方式），否认食物过敏史。'},
      {title: '现病史', content: '现病史：患者于3天前疑似因发热服用布洛芬出现便血，暗红色，稀烂便，1天5次，每次约200ml，中途呕血1次，鲜红色，血中有胃内容物，约300ml，伴肚脐上方腹胀。'},
      {title: '检查结果', content: '1.血液检查血红蛋白水平正常，说明您的贫血风险较低白细胞计数在正常范围内，表示您的免疫系统正常工作血小板计数正常，无异常发现。'},
      {title: '诊断结果', content: '经过您的详细症状描述、体检和实验室测试，我们对您的身体状况进行了全面评估。以下是您的诊断结果:根据您的症状和检查结果，我们初步判断您可能患有以下情况请注意1.咳嗽和喉咙痛:您的咳嗽和喉咙痛可能是由于感冒或上呼吸道感染引起的。建议您多喝水、休息好，并可以考虑服用一些缓解症状的药物。2.胃部不适:根据您的症状描述，您可能出现了胃酸过多或消化不良的问题，建议您调整饮食习惯，避免辛辣食物和过度进食，同时可以考虑使用一些抗酸药物来缓解症状，3.头痛和眩晕:您描术的头痛和眩是可能与长时间的用眼过度、缺乏休息或压力过大有关。建议您合理安排工作和休息时间，避免过度疲劳，并可以适当进行眼部放松运动，'},
      {title: '治疗方案和用药建议', content: '咳嗽和喉咙痛：休息：多休息，避免过度劳累，有助于身体康复。多喝水：保持充分的水分摄入，有助于稀释痰液。温水漱口：用温盐水漱口有助于缓解喉咙痛。药物：可以考虑使用含有止咳和祛痰成分的药物，如草本咳嗽糖浆等。胃部不适：饮食调理：避免食用过于辛辣、油腻或刺激性食物，多食用易消化的清淡食物。小而频餐：多次少量进食，有助于减轻胃部不适。药物：可以考虑口服一些抗酸药物，如胃药或抗酸药片。'},
      {title: '随访记录', content: '无'}
    ],
    currentSectionIndex: 0, // 当前选中的病历部分索引
    savedContent: '' // 保存的内容
  },
  onLoad: function () {
    // 页面加载时尝试从本地存储中获取之前保存的内容
    const savedContent = wx.getStorageSync('savedContent');
    if (savedContent) {
      this.setData({
        savedContent: savedContent
      });
    }
  },
  onInputSectionContent: function (e) {
    const sectionIndex = this.data.currentSectionIndex;
    const content = e.detail.value;
    const sections = this.data.sections;
    sections[sectionIndex].content = content;
    this.setData({
      sections: sections
    });
  },
  onInputPatientName: function(e) {
    this.setData({
      patientName: e.detail.value
    });
  },
  onInputPatientGender: function(e) {
    this.setData({
      patientGender: e.detail.value
    });
  },
  onInputPatientAge: function(e) {
    this.setData({
      patientAge: e.detail.value
    });
  },
  onSelectSection: function(e) {
    const sectionIndex = e.currentTarget.dataset.sectionIndex;
    this.setData({
      currentSectionIndex: sectionIndex
    });
  },
  onSave: function() {
    const sections = this.data.sections;
    const contentArray = sections.map(section => section.content);
    const content = contentArray.join('\n\n');
    this.setData({
      savedContent: content
    });
    wx.setStorageSync('savedContent', content); // 将内容保存到本地存储中
    console.log('保存成功！');
  }
})
