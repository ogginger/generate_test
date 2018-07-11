//xGenerateTest_FunctionTypeNotFunction_ThrowsErrorFunctionTypeNotFunction.js: Testing logic.

define([
	"xGenerateTest",
	"log"
], function(
	xGenerateTest,
	log
) {
  return {
	"Name": "xGenerateTest_FunctionTypeNotFunction_ThrowsErrorFunctionTypeNotFunction",
        "Input": { 
		"Name": "",
		"Input": "",
		"Function": "",
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
ult;
                }
        },
        "ExpectedOutput": { "message": "Error: Input function type was not function!" },
        "Comparator": {
                "Object": true,
                "Debug": false
        }
  };
});
