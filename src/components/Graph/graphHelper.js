const graphHelper = {
  makeRandomColors(length){
    let colorList = []

    for(let i = 0 ; i < length; i++) {
      colorList.push("#"+((1<<24)*Math.random()|0).toString(16))
    }
    return colorList
  }
}

export default graphHelper;