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
