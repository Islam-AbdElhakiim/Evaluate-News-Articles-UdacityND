export const handleSubmit = async (event) => {
	event.preventDefault();
	const link = document.querySelector("#name").value;
	//Check if the input is a valid URL
	if (Client.checkURL(link)) {
		document.querySelector("#results").innerHTML =
			'<div class="loader"></div>';
		//Start fetching the meaning cloud API
		const response = await Client.callServer(link);

		//Fill the UI with response body
		Client.fillTheUi(response);
	} else {
		alert("Master, you have to enter a URL. We will support forever...");
	}
};
