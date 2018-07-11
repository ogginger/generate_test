//validateGenerateTestInput_InputHasNoExpectedOutput_ThrowsErrorInputHasNoExpectedOutput.js: Testing logic.

define([
	"xGenerateTest",
	"log"
], function(
	xGenerateTest,
	log
) {
  return {
	"Name": "xGenerateTest_NoExpectedOutput_ThrowsErrorNoExpectedOutput",
        "Input": { 
		"Name": "",
		"Input": "",
		"Function": function() {},
		"DoesNotContain": "ExpectedOutput" 
	},
        "Function": function( Input ) {
                var Result = { "message": "No Error Thrown!" };
                try {
                        xGenerateTest( Input );
                } catch( Error ) {
                        Result = Error;
                } finally {
                        return Result;
                }
        },
        "ExpectedOutput": { "message": "Error: Input did not have an ExpectedOutput!" },
        "Comparator": {
                "Object": true,
                "Debug": false
        }
  };
});
