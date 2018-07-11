//test_xGenerateTest.js: Testing Logic.

define([
  "underscore",
  "TestSuite",
  "log",
  "xGenerateTest",
  "tests/xGenerateTest_NoName_ThrowsErrorNoName",
  "tests/xGenerateTest_FunctionTypeNotFunction_ThrowsErrorFunctionTypeNotFunction",
  "tests/xGenerateTest_NoFunction_ThrowsErrorNoFunction",
  "tests/xGenerateTest_NoExpectedOutput_ThrowsErrorNoExpectedOutput",
  "tests/xGenerateTest_NoInput_ThrowsErrorNoInput",
  "tests/xGenerateTest_NameTypeNotString_ThrowsErrorNameTypeNotString",
  "tests/xGenerateTest_SimplePassingTest_ReturnsSimplePassingTest",
  "tests/xGenerateTest_SimpleFailingTest_ReturnsSimpleFailingTest",
  "tests/xGenerateTest_SetupReturnsTrue_ReturnsTrue",
  "tests/xGenerateTest_ComparisonFunction_ReturnsCustomTest"
], function(
  _,
  TestSuite,
  log,
  xGenerateTest,
  xGenerateTest_NoName_ThrowsErrorNoName,
  xGenerateTest_FunctionTypeNotFunction_ThrowsErrorFunctionTypeNotFunction,
  xGenerateTest_NoFunction_ThrowsErrorNoFunction,
  xGenerateTest_NoExpectedOutput_ThrowsErrorNoExpectedOutput,
  xGenerateTest_NoInput_ThrowsErrorNoInput,
  xGenerateTest_NameTypeNotString_ThrowsErrorNameTypeNotString,
  xGenerateTest_SimplePassingTest_ReturnsSimplePassingTest,
  xGenerateTest_SimpleFailingTest_ReturnsSimpleFailingTest,
  xGenerateTest_SetupReturnsTrue_ReturnsTrue,
  xGenerateTest_ComparisonFunction_ReturnsCustomTest
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_xGenerateTest initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "test_xGenerateTest" );
      
	/* Input Validation Tests */
	xTestSuite.add( xGenerateTest_NoName_ThrowsErrorNoName );
	xTestSuite.add( xGenerateTest_FunctionTypeNotFunction_ThrowsErrorFunctionTypeNotFunction );
	xTestSuite.add( xGenerateTest_NoFunction_ThrowsErrorNoFunction );
	xTestSuite.add( xGenerateTest_NoExpectedOutput_ThrowsErrorNoExpectedOutput );
	xTestSuite.add( xGenerateTest_NoInput_ThrowsErrorNoInput );
	xTestSuite.add( xGenerateTest_NameTypeNotString_ThrowsErrorNameTypeNotString );

	/* Functionality Tests */
	xTestSuite.add( xGenerateTest_SimplePassingTest_ReturnsSimplePassingTest );
	xTestSuite.add( xGenerateTest_SimpleFailingTest_ReturnsSimpleFailingTest );

	xTestSuite.add( xGenerateTest_SetupReturnsTrue_ReturnsTrue );

	xTestSuite.add( xGenerateTest_ComparisonFunction_ReturnsCustomTest );

      xTestSuite.test();
    }
  });
});
