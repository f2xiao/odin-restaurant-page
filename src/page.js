const template = `<h1>title</h1><p>content</p>` 

function createEle (tag) {
	// create a div element
	const element = document.createElement(tag);
	
	return element;
}
const element = createEle('div');

const addContent = function () {
	// add content and styles to element
	element.innerHTML = template;
}

const appendToDOM = function (){
	// find the div#content
	const target = document.body.querySelector("div#content")
	// then append the element here to it
	target.appendChild(element);
}
	
export default function () {
	addContent();
	appendToDOM();
}