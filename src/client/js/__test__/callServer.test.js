import callServer from "../callServer";

describe("Testing the Calling Server function", () => {
	test("Check if it return a value ", () => {
		expect(callServer("Udacity.com")).toHaveReturned();
	});
});
