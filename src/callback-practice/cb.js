console.log('Hello CB good buddy.')

function doSomething(id, cb) {
  const newValue = id + id + id + id

  cb(null, newValue)
}

doSomething(5, function(err, val) {
  console.log('here is the value: ', val)
})

doSomething(10, (err, val) => console.log('here is the value: ', val))
