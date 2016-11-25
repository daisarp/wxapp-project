Page({
  data:{
    picSrc: '../../images/hotelPic.png'
  },

  //更换机票
  changeFlight:function(){
    wx.navigateTo({
      url: '../airticket/airticket'
    })
  }





})
