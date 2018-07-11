//xGenerateTest_SimplePassingTest_ReturnsSimplePassingTest.js: Testing logic.

define([ 
	"underscore",
	"xGenerateTest"
], function( 
	_,
	xGenerateTest
) {
	return {
		"Name": "xGenerateTest_SimplePassingTest_ReturnsSimplePassingTest",
                "Input": {
                	"Name": "SimpleTest",
                        "Input": undefined,
                        "Function": function( Input ) {
                        	return true;
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
                "ExpectedOutput": true,
                "Comparator": {
                	"Debug": false
                }
	};
});
