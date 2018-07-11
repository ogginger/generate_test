//xGenerateTest_SimpleFailingTest_ReturnsSimpleFailingTest.js: Testing logic.

define([
	"underscore",
	"xGenerateTest"
], function(
	_,
	xGenerateTest
) {
	return {
                "Name": "xGenerateTest_SimpleFailingTest_ReturnsSimpleFailingTest",
                "Input": {
                        "Name": "SimpleTest",
                        "Input": undefined,
                        "Function": function( Input ) {
                                return false;
                        },
                        "ExpectedOutput": true
                },
                "Function": function( Input ) {
                        var SimpleTest = xGenerateTest( Input );
                        var bResult = false;
                        if ( _.isFunction( SimpleTest.Run ) ) {
                                bResult = SimpleTest.Run();
                        }
                        return bResult;
                },
                "ExpectedOutput": false,
                "Comparator": {
                        "Debug": false
                }
        };
});
