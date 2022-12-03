const countHours = (year, holidays) => {
  let count = 0
  let days = []
  
  for(let i = 0; i < holidays.length; i++) {
    let date = new Date(`${holidays[i].split("/")}, ${year}`).getDay()
    days.push(date)
  }

  days.map((day) => day === 0 || day === 6 ? null : count++)
  return count*2
}