for(crowNum = 99; crowNum >= 1; crowNum--) {
  if(crowNum != 1) {
    console.log(crowNum + "crows on the wall" + crowNum + "crows." + "1 fell down and became a wight" + (crowNum - 1) + "crows on the wall")
  } else {
    console.log("1 single crow. It fell down and became a wight. There is no one left to defend Westeros now.")
  }
}
