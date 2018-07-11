//xGenerateTest.js: Functional Logic.

define([
	"log",
	"validate",
	"xGenerateTestValidation",
	"Test"
], function(
	log,
	validate,
	xGenerateTestValidation,
	Test
) {
  return function( Options ) {

	//Validate Options.
	validate({
		"Data": Options,
		"Validation": xGenerateTestValidation
	});

	return Test( Options );
	//*/



/*********************************************************************/


/*		
	var bDebug = false;
	var bObject = false;
		
	if ( _.has( Options, "Comparator" ) ) {
		if ( typeof Options.Comparator !== "object" ) {
		//if the comparator is not an object then...
			throw { "message": "The Comparator was not an object." };
		}
		if ( Options.Comparator.Debug === true ) {
		//If the comparator's debug value is true then...
			bDebug = true;
		}
		
		if ( Options.Comparator.Object === true ) {
		//if the comparator's object value is true then...
			bObject = true;
		}
	}
		
	var xTest;
	var Result = Options.Function( Options.Input );
	var Expected = Options.ExpectedOutput;
				
	if ( bComparisonFunction === false ) {
	//if the ComparisonFunction is undefined then...
		//Create a typical test.
			
		xTest = function() {
			var bTestResult = false;
			if ( bObject === true ) {
			//if the result and expected output are objects then...	
				log( "Result: " + JSON.stringify( Result ), bDebug );
				log( "Expected: " + JSON.stringify( Expected ), bDebug );
			
				if (
					bIsObjectEqual( Result, Expected ) === true
				) {
				//The the function result matched the expected output then...
					bTestResult = true;
				}
			} else {
			//otherwise the result and expected output are not objects.
				log( "Result: " + Result, bDebug );
				log( "Expected: " + Expected, bDebug );
				
				if ( Result === Expected ) {
				//The the function result matched the expected output then...
					bTestResult = true;
				}
			}
			
			if ( bTestResult === true ) {
			//if the test result was true then...
				return true;
			} else {
			//otherwise the test result was not true so...
				log( "UnitTest: " + Options.Name + "() - Failed!" );
				return false;
			}
		};
	} else {
	//Otherwise a comparison function was given so...
		xTest = function() {
			return Options.ComparisonFunction( Result, Expected );
		};
	}
	
	log("At the end of function!");
	return xTest;
	//*/
  };
});
