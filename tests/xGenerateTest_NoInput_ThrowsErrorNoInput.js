//xGenerateTest_NoInput_ThrowsErrorNoInput.js: Testing logic.

define([
	"xGenerateTest",
	"log"
], function(
	xGenerateTest,
	log
) {
  return {
	"Name": "xGenerateTest_NoInput_ThrowsErrorNoInput",
        "Input": { 
		"Name": "",
		"DoesNotContain": "Input",
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
        "ExpectedOutput": { "message": "Error: Input did not have an Input!" },
        "Comparator": {
                "Object": true,
                "Debug": false
        }
  };
});
