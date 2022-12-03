const distributeGifts = (packOfGifts, reindeers)  => {
  const packWeight = packOfGifts.join("").length
  const reindeerCanCarry = reindeers.join("").length*2

  return Math.floor(packWeight/reindeerCanCarry)
}

console.log(distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"]))