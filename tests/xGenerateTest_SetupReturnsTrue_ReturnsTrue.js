//xGenerateTest_SetupReturnsTrue_ReturnsTrue.js: Testing logic.

define([
	"underscore",
	"xGenerateTest"
], function(
	_,
	xGenerateTest
) {
	return {
		"Name":"xGenerateTest_SetupReturnsTrue_ReturnsTrue",
		"Input": {
			"Name": "SimpleTest",
			"Input": function() {
				return function() {
					return true;
				};
			},
			"Function": function( Input ) {
				var bResult = false;
				if ( _.isFunction( Input ) ) {
					bResult = Input();
				}
				return bResult;
			},
			"ExpectedOutput": true
		},
		"Function": function( Input ) {
			var bResult = false;
			var xTest = xGenerateTest( Input );

			if ( _.isFunction( xTest.Run ) ) {
				bResult = xTest.Run();
			}

			return bResult;
		},
		"ExpectedOutput": true
	};
});
