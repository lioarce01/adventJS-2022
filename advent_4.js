function fitsInOneBox(boxes) {
  return boxes.sort((a, b) => a.l - b.l)
    .every((box, i, arr) => {
      if(i === arr.length - 1) return true
      return box.l < arr[i + 1].l && box.w < arr[i + 1].w && box.h < arr[i + 1].h
    })
}

console.log(fitsInOneBox([
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
]))

console.log(fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]))