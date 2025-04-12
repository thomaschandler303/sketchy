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

function randomColor() {
	console.log('randomColor function invoked')
	let r = Math.random() * 255;
	let g = Math.random() * 255;
	let b = Math.random() * 255;
	let a = .1
	return [r,g,b,a];
}
// add listener to divs for color change when hovering

function createListeners() {
	const newDivs = document.querySelectorAll(".new")

	newDivs.forEach((newDiv) => {
		newDiv.addEventListener("mouseover", () => {
			if (!newDiv.style.backgroundColor) {
				const [r,g,b,a] = randomColor();
				newDiv.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
				newDiv.style.opacity = "0.1";
			}
			else {
				let opacity = +(newDiv.style.opacity);
				opacity += 0.1;
				newDiv.style.opacity = `${opacity}`;
			}
			
			
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