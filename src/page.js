const template = `<h1>title</h1><p>content</p>` 

export const element = createEle('div');

export const createEle = function (tag) {
	// create a div element
	const element = document.createElement(tag);
	
	return element;
}


export const addContent = function (content) {
	// add content and styles to element
	element.innerHTML = template;
}

export const appendToDOM = function (){
	// find the div#content
	const target = document.body.querySelector("div#content")
	// then append the element here to it
	target.appendChild(element);
}
	
