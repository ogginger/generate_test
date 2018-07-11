//xGenerateTest_NoName_ThrowsErrorNoName.js: Testing logic.

define([
	"xGenerateTest",
	"log"
], function(
	xGenerateTest,
	log
) {
  return {
	"Name": "xGenerateTest_NoName_ThrowsErrorNoName",
        "Input": { "DoesNotContain": "Name" },
        "Function": function( Input ) {
                var Result = {};
                try {
                        xGenerateTest( Input );
                } catch( Error ) {
                        Result = Error;
                } finally {
                        return Result;
                }
        },
        "ExpectedOutput": { "message": "Error: Input did not have a Name!" },
        "Comparator": {
                "Object": true,
                "Debug": false
        }
  };
});
