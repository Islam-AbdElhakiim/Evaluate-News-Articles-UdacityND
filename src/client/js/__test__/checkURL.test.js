import {checkURL} from "../checkURL";

describe("Testing the Check URL function", () => {
	test("Check if it return a value ", () => {
		expect(checkURL("Udacity.com")).toBeTruthy();
	});
});
