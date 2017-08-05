const Template = require('./Template')
const Templates = require('./Templates')

//exports
module.exports.template = (...x)=>new Template(...x)
module.exports.templates = (...x)=>new Templates(...x)