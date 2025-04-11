const container = document.querySelector(".container");

// initial grid setup 16 x 16

// create div elements
function createDivs(x) {
	const newDivWidth = 600 / x;
	for (let i = 0; i < (x**2); i++) {
		const newDiv = document.createElement("div");
		newDiv.classList.add("new");
		newDiv.setAttribute("style", `display: flex; flex: 1 1 auto; width: ${newDivWidth}px`);
		container.appendChild(newDiv);
	}
}

// add listener to divs for color change when hovering

function createListeners() {
	const newDivs = document.querySelectorAll(".new")

	newDivs.forEach((newDiv) => {
		newDiv.addEventListener("mouseover", () => {
			newDiv.style.backgroundColor = "blue";
		})
	})
}

createDivs(16);
createListeners();

// prompt user for new number
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
	const newNum = prompt("Enter a number between 10 and 100");

	gridReset();
	createDivs(newNum);
	createListeners();
})

// reset the grid
function gridReset() {
	const element = document.querySelector(".container");
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}

}