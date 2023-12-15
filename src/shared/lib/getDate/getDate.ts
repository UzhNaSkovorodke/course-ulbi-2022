const getDay = (count = 1) => {
  const date = new Date(Date.now() + 86400e3 * count)
  return date.toUTCString()
}

const getMinute = (count = 1) => {
  const date = new Date(Date.now() + 60000 * count)
  return date.toUTCString()
}

export { getDay, getMinute }
