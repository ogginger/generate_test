//build.js: Configuration file for optimizing the ifSetup function. 
/*
*/ 
({
    paths: {
	"log": "lib/log.min",
	"Test": "lib/test.min",
	"validate": "lib/validate.min",
	"underscore": "lib/underscore.min"
    },
    exclude: [ "log", "underscore" ],
    name: "xGenerateTest",
    out: "generate_test.min.js"
})
