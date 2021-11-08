//Start the request to our server with the provided link
export const callServer = async (link) => {
	try {
		const response = await fetch("http://localhost:8081/get-nlp", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({link}),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
};
