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
  };
});
