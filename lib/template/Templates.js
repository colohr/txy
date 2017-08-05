const fxy = require('fxy')

const Template = require('./Template')
class Templates extends Map{
	constructor(folder){
		super()
		this.folder = folder
		set_templates(this)
	}
}

//exports
module.exports = Templates

//shared actions
function set_templates(templates){
	let tree = fxy.tree(templates.folder)
	templates.name = tree.name
	let items = tree.items.only
	for(let item of items){
		item.template = new Template(item.get('path'))
		templates.set(item.name,item)
	}
	return templates
}

