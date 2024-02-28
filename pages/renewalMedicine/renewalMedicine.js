// index.js

Page({
  
  data: {
    name: '',
    phone: '',
    medicine: '',
    quantity: '',
    submitted: false,
    resultMessage: '',
    imageUrls: [
      'https://tse1-mm.cn.bing.net/th/id/OIP-C.ikQxlS-zj2rWVEPbOvkunQHaFj?w=241&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      'https://tse1-mm.cn.bing.net/th/id/OIP-C.lXU_G0Yvh7zjzixmHAiXwgHaFj?w=210&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      'https://tse4-mm.cn.bing.net/th/id/OIP-C.AOp4ijgG3T5FyrzVk0i8cAHaFj?w=240&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7'
    ]
  },
  
  onNameInput(event) {
    this.setData({
      name: event.detail.value
    })
  },
  
  onPhoneInput(event) {
    this.setData({
      phone: event.detail.value
    })
  },
  
  onMedicineInput(event) {
    this.setData({
      medicine: event.detail.value
    })
  },
  
  onQuantityInput(event) {
    this.setData({
      quantity: event.detail.value
    })
  },
  
  onSubmit() {
    // 模拟提交成功或失败的情况
    const isSuccess = Math.random() < 0.5; // 50% 的概率提交成功
    
    if (isSuccess) {
      this.setData({
        submitted: true,
        resultMessage: '提交成功'
      });
    } else {
      this.setData({
        submitted: true,
        resultMessage: '提交失败，请稍后再试'
      });
    }
  }
})
