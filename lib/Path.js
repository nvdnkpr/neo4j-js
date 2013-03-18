/*
 * Copyright (c) Atlantis Flight Development
 * 
 * Path.js
 * 
 */

// require statements go here

/* ========================================================================================================
 * 
 * Private Members Declaration (no methods)
 * 
 * ===================================================================================================== */

// code

/* ========================================================================================================
 * 
 * Public Members Declaration (no methods)
 * 
 * ===================================================================================================== */

// code

/* ========================================================================================================
 * 
 * Public Methods - Keep in alphabetical order
 * 
 * ===================================================================================================== */

module.exports = function (neo4j)
{
	function Path (obj)
	{
		this.length = obj.length;
		this.start = neo4j.Utils.parseId(obj.start);
		this.end = neo4j.Utils.parseId(obj.end);
		
		Object.freeze(obj);
		Object.defineProperty(this, '_obj', { value: obj, enumerable: false, writable: false });
	}
	
	return Path;
};

/* ========================================================================================================
 * 
 * Private Methods - Keep in alphabetical order
 * 
 * ===================================================================================================== */

// code

/* ========================================================================================================
 * 
 * Initialization
 * 
 * ===================================================================================================== */

// If function calls need to be made to initialize the module, put those calls here.