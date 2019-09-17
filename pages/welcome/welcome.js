Page({
  onTap:function(){
    //  wx.navigateTo({
    //    url: '/pages/ports/ports'
    //  })
    
    // wx.redirectTo({
    //   url: '/pages/ports/ports',
    // })

    wx.switchTab({
      url: '/pages/ports/ports'
    })
  }
})