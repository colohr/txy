

class Engine{
	constructor(name,templates){
		this.name = name
		this.templates = templates
	}
	get(app,route){
		app.get(route,(request,response)=>template_request(this,app,route,request,response))
		return this
	}
	register(app){
		app.engine(this.name,(file,options,callback)=>on_file(this,file,options,callback))
		return this
	}
	set(app,folder){
		app.set('views',folder)
		app.set('view engine',this.name)
		return this
	}
}

//exports
module.exports = Engine

//shared actions
function on_file(engine,file,options,callback){
	console.log({file,options,callback})
}

function template_request(engine,app,route,request,response){
	console.log({template_request:route})
	//app.render('route',{})
	response.send(engine.name)
}