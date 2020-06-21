Page({
 

  data: {
    x: 0,
    y: 0,
    scale: 2,
  },

  bindchange(e) {
    console.log('e',e);
  },

  bindTap(e) {
    console.log('e.detail')
  },

  onChange(e) {
    console.log(e.detail)
  },

  onScale(e) {
    console.log(e.detail)
  }
})