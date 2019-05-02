const graphHelper = {
  makeRandomColors(length){
    let colorList = []

    for(let i = 0 ; i < length; i++) {
      colorList.push("#"+((1<<24)*Math.random()|0).toString(16))
    }
    return colorList
  },
  mentorTicketCounter(arr){
    console.log(arr)
    let hm = new Map()
    let count = 1
    for(let i = 0; i < arr.length ; i ++) {
      if(hm.has(arr[i].mentors[0])){
        hm.set(arr[i].mentors[0],hm.get(arr[i].mentors[0])+1)
      }
      else {
        hm.set(arr[i].mentors[0], count)
      }
    }
    let keys =[ ...hm.keys() ];
    let values = [...hm.values()]
    let filtered = {
      labels: keys,
      data: values
    }
    console.log(hm)
    return filtered
  }
}

export default graphHelper;