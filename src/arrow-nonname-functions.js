const test = {
	name: "Long",
	anonFunction: function () {
		return function () {
			// this.name point to here, if yoou want to have name consider const name = "name"
			console.log("anno: ", this.name); // ===> this point to current function with name
			console.log("anno: ", arguments); // ===> arguments point to current function
		};
		
	},
	arrowFunction: function () {
		// this.name = "longaaa";
		return () => {
			console.log("arrow: ", this.name); // ===> inherit and bind this from the surrounding lexical scope
			console.log("arrow: ", arguments); // ===> inherit arguments from the outer function.
		};
	},
};

const anon = test.anonFunction("Hi", "Bikash");
const arrow = test.arrowFunction("hello", "Bikash");

anon();
// anon.apply({
// name: "test"
// })

arrow();

global.globalThis.name = "window";

function testFunction() {
	// this.name = "Long";
	
	const anon = function () {
		console.log("testFunction: ", this.name);
		console.log("testFunction: ", arguments);
	}.bind(this);

	anon();
}

testFunction();

function testFunction2() {
	this.name = "Long2";
	testFunction();
}

testFunction2();

const testFunction3 = testFunction.bind({
	name: "Long3",
});

testFunction3();