module.exports = cb => e => {
  if (e.keyCode !== 13) return
  e.preventDefault()
  cb(e.target.value, err => {
    if (err) throw err
    e.target.value = ''
  })
}
