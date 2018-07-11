//xGenerateTestValidation.js: Functional Logic.

define([ "underscore", "log" ], function( _, log ) {
  return [
	function( Input ) {
	//Input.Name validation.
		if ( _.has( Input, "Name" ) === false ) {
			throw { "message": "Error: Input did not have a Name!" };
		} else if ( _.isString( Input.Name ) === false ) {
			throw { "message": "Error: Input name type was not string!" };
		} else {
			return true;
		}
	},
	function( Input ) {
	//Input.Input validation.
		if ( _.has( Input, "Input" ) === false ) {
			throw { "message": "Error: Input did not have an Input!" };
		} else {
			return true;
		}
	},
	function( Input ) {
	//Input.Function validation.
		if ( _.has( Input, "Function" ) === false ) {
			throw { "message": "Error: Input did not have a Function!" };
		} else if ( _.isFunction( Input.Function ) === false ) {
			throw { "message": "Error: Input function type was not function!" };
		} else {
			return true;
		}
	},
	function( Input ) {
	//Input.ExpectedOutput Validation.
		if ( _.has( Input, "ExpectedOutput" ) === false ) {
			throw { "message": "Error: Input did not have an ExpectedOutput!" };
		}
	}
  ];
});
