export function fillTheUi({data}) {
	// console.log(data);
	const resultArea = document.querySelector("#results");

	//TODO: fill the results div with the fetched results from meaningCloud API
	resultArea.innerHTML = `
	<div> Your Test Point is : <span>${data.sentence_list[0].text}</span></div>
	<div> Your Test Agreement is : <span>${data.sentence_list[0].agreement}</span></div>
	<div> Your Test Subjectivity is : <span>${data.subjectivity}</span></div>
	<div> Your Test Irony is : <span>${data.irony}</span></div>

	`;
}
