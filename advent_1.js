const wrapping = (gifts) => {
  const wrap = ((gift) => {
    const a = '*'.repeat(gift.length + 2)
    return [a, `*${gift}*`, a].join("\n")
  })
  return gifts.map(wrap)
}