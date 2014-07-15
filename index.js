var util = require('util')
  , ls = window.localStorage
  , id = process.env.workshopper_id || 'browser-workshopper'

module.exports = getProgress
module.exports.set = setProgress
module.exports.get = getProgress

function getProgress(name) {
  var key = util.format('progress.%s:%s', id, name)
  return name && !!ls.getItem(key)
}

function setProgress(name, value) {
  var key = util.format('progress.%s:%s', id, name)
  return name && ls.setItem(key, !!value ? '1' : '')
}
