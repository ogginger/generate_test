//xGenerateTest_ComparisonFunction_ReturnsCustomTest.js: Testing logic.

define([
	"xGenerateTest",
	"underscore"
], function(
	xGenerateTest,
	_
) {
	return {
		"Name":"xGenerateTest_ComparisonFunction_ReturnsCustomTest",
		"Input": {
			"Name": "SimpleTestingUsingComparisonFunction",
			"Input": undefined,
			"Function": function( Input ) {
				return true;
			},
			"ExpectedOutput": true,
			"ComparisonFunction": function( Input ) {
				return Input.Result === Input.ExpectedOutput;
			}
		},
		"Function": function( Input ) {
			var bResult = false;
			var xTest = xGenerateTest( Input );

			if ( _.isFunction( xTest.Run ) ) {
				bResult = xTest.Run();
			}
			return bResult;
		},
		"ExpectedOutput": true,
		"Comparator": {
			"Debug": false
		}
	};
});
