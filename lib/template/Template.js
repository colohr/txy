const bind_template  = require('es6-template-strings/resolve-to-string')
const compile_template = require('es6-template-strings/compile')
const fxy = require('fxy')

class Template extends Map{
	constructor(file_path,data){
		if(!fxy.exists(file_path)) throw new Error(`Template file: ${file_path} does not exist.`)
		super()
		this.item = fxy.read_item(file_path)
		this.data=data
		if(!this.item.get('type').file) throw new Error(`Template file: ${file_path} is not a readable file for a template.`)
		this.template = compile_template(this.item.content)
	}
	bind(data){
		if(!fxy.is.data(data)) throw new Error(`Data for template is not a valid data value.`)
		return bind_template(this.template,combine_data(this,data))
	}
	get data(){ return get_data(this) }
	set data(data){ return set_data(this,data) }
	get id(){
		let name = this.name
		let extension = fxy.extname(name)
		return name.replace(extension,'')
	}
	get name(){ return this.item.name }
	get path(){ return this.item.get('path') }
}

//exports
module.exports = Template