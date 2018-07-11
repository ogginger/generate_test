//xGenerateTest_NameTypeNotString_ThrowsErrorNameTypeNotString.js: Testing logic.

define([
	"xGenerateTest"
], function(
	xGenerateTest
) {
	return {
		"Name":"xGenerateTest_InputNameTypeNotString_ThrowsErrorInputNameTypeNotName",
		"Input": {
			"Name": undefined,
			"Input": "",
			"Function": function() {},
			"ExpectedOutput": ""
		},
		"Function": function( Input ) {
			var Result = { "message": "No Error Thrown." };
			try {
				xGenerateTest( Input );
			} catch( Error ) {
				Result = Error;
			} finally {
				return Result;
			}
		},
		"ExpectedOutput": { "message": "Error: Input name type was not string!" },
		"Comparator": {
			"Object": true,
			"Debug": false
		}
	};
});
