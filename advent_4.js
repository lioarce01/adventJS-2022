function fitsInOneBox(boxes) {
  return (() => boxes.every(({l,w,h}, idx) => {
    if (idx === boxes.length - 1) return true
    const nextBox = boxes[idx + 1] || {}
    const canFitsIn = (nextBox.l > l && nextBox.w > w && nextBox.h > h) || (nextBox.l < l && nextBox.w < w && nextBox.h < h)
    return canFitsIn
  }))()
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