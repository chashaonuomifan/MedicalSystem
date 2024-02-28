// pages/talkdoc/talkdoc.js
Page({
  data: {
      content: '',
      // 当前登录者信息
      login: {
          id: '2023',
          user: 'Kenny',
          avatar: '../../images/spiderman.jpg'
      },
      // 聊天信息
      chatList: [{
              msgId: '2023',
              nickname: 'Kenny',
              avatar: '../../images/spiderman.jpg',
              message: '请问医生最近的流感传播有什么好的防御措施？',
              type: 'text',
              date: '12-02 14:24' // 每隔5分钟记录一次时间
          },
          {
              msgId: '2022',
              nickname: '钟南山',
              avatar: 'https://img.puchedu.cn/uploads/3/253/180296134/949211121.jpg',
              message: '保持良好的个人卫生习惯是预防流感等呼吸道传染病的重要手段，尽量减少到人群密集场所活动，避免接触呼吸道感染患者。保持良好的呼吸道卫生习惯，咳嗽或打喷嚏时，用纸巾、毛巾等遮住口鼻。保持环境清洁和通风。',
              type: 'text'
          },
          {
              msgId: '2022',
              nickname: 'Kenny',
              avatar: 'https://img.puchedu.cn/uploads/3/253/180296134/949211121.jpg',
              message: '该消息为撤回消息',
              type: 'custom'
          },
          {
              msgId: '2023',
              nickname: 'Kenny',
              avatar: '../../images/spiderman.jpg',
              message: '那不小心感染流感大概多久才会康复？',
              type: 'text'
          },
          {
              msgId: '2022',
              nickname: '钟南山',
              avatar: 'https://img.puchedu.cn/uploads/3/253/180296134/949211121.jpg',
              message: '一般流感病程与正常病毒感染病程相同，约持续1周。',
              type: 'text',
              date: '12-04 16:05'
          },

          {
              msgId: '2022',
              nickname: '钟南山',
              avatar: 'https://img.puchedu.cn/uploads/3/253/180296134/949211121.jpg',
              message: '但少数患者出现继发性细菌感染',
              type: 'text'
          },
          {
              msgId: '2022',
              nickname: '钟南山',
              avatar: 'https://img.puchedu.cn/uploads/3/253/180296134/949211121.jpg',
              message: '该消息为撤回消息',
              type: 'custom'
          },
          {
              msgId: '2023',
              nickname: 'Kenny',
              avatar: '../../images/spiderman.jpg',
              message: '那流感该用什么药物较好？',
              type: 'text'
          },
          {
              msgId: '2023',
              nickname: 'Kenny',
              avatar: '../../images/spiderman.jpg',
              message: '医生能给点用药注意吗？',
              type: 'text'
          },
          {
              msgId: '2022',
              nickname: '钟南山',
              avatar:  'https://img.puchedu.cn/uploads/3/253/180296134/949211121.jpg',
              message: '选择性的吃一点抗病毒的药物，比如：奥司他韦这种药。',
              type: 'text',
              date: '12-06 11:21'
          },
          {
              msgId: '2022',
              nickname: '钟南山',
              avatar: 'https://img.puchedu.cn/uploads/3/253/180296134/949211121.jpg',
              message: '还可以配合一些清热解毒的中成药，例如是莲花清瘟，清开灵颗粒等等的药物。',
              type: 'text',
              date: '12-07 19:08'
          },
      ],
  },
  onLoad() {
      this.scrollToBottom();
  },
  // 输入监听
  inputClick(e) {
      this.setData({
          content: e.detail.value
      })
  },
  // 发送监听
  sendClick() {
      var that = this;
      var list = this.data.chatList;
      // 获取当前时间
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minu = date.getMinutes();
      var now1 = month < 10 ? '0' + month : month;
      var now2 = day < 10 ? '0' + day : day;
      // 组装数据
      var msg = {
          msgId: this.data.login.id,
          nickname: this.data.login.user,
          avatar: this.data.login.avatar,
          message: this.data.content,
          type: 'text',
          date: now1 + '-' + now2 + ' ' + hour + ':' + minu
      }
      this.setData({
          chatList: list.concat(msg)
      }, () => {
          that.scrollToBottom();
          that.setData({
              content: ''
          })
      })
  },
  // 滑动到最底部
  scrollToBottom() {
      setTimeout(() => {
          wx.pageScrollTo({
              scrollTop: 200000,
              duration: 3
          });
      }, 600)
  },
})
