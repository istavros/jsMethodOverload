// addMethod - By Stavros Ioannidis (MIT Licensed)
function addMethod(obj, name, fn) {
	obj[name] = obj[name] || function() {
  
		// get the cached method with arguments.length arguments
		var method = obj[name].cache[arguments.length];
 
		// if method exists call it 
		if ( !! method)
			return method.apply(this, arguments);
		else
			throw new Error("Wrong number of arguments");
	};
 
	// initialize obj[name].cache
	obj[name].cache = obj[name].cache || {};
 
 
	// Check if a method with the same 
	// number of arguments exists  
	if ( !! obj[name].cache[fn.length])
		throw new Error("Cannot define multiple '" + name + "' methods with the same number of arguments!");
 
	// cache the method with fn.length arguments
	obj[name].cache[fn.length] = function() {
		return fn.apply(this, arguments);
	};
}
