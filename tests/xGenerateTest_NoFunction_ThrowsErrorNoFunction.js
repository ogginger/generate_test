//xGenerateTest_NoFunction_ThrowsErrorNoFunction.js: Testing logic.

define([
	"xGenerateTest",
	"log"
], function(
	xGenerateTest,
	log
) {
  return {
	"Name": "xGenerateTest_NoFunction_ThrowsErrorNoFunction",
        "Input": { 
		"Name": "",
		"Input": "",
		"DoesNotContain": "Function" 
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
        "ExpectedOutput": { "message": "Error: Input did not have a Function!" },
        "Comparator": {
                "Object": true,
                "Debug": false
        }
  };
});
