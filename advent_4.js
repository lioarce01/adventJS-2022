function fitsInOneBox(boxes) {
  // let newBox = {
  //   l: 0,
  //   w: 0,
  //   h: 0,
  // }

  // for(let i = 0; i < boxes.length; i++) {
  //   console.log(boxes[i])
  //   if(boxes[i].l > newBox.l && boxes[i].w > newBox.w && boxes[i].h > newBox.h) {
  //     newBox = {
  //       l: boxes[i].l,
  //       w: boxes[i].w,
  //       h: boxes[i].h,
  //     }
  //   }
  //   return true
  // }
  // return false
}

console.log(fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]))

console.log(fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]))