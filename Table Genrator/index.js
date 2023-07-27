let table = document.querySelector(".table")
let input = document.querySelector("input")
let btn = document.querySelector(".btn")
let num
let count = 0
let tableIsComplete = false

btn.onclick = () => {
	num = input.value
	if (count == 0) {
		generateTable()
	} else if (count == 1 && tableIsComplete) {
		removeChilds()
		generateTable()
	}
}

let generateTable = () => {
	let i = 1
	if (num == 0 || num == "") {
		table.insertAdjacentHTML("beforeend", `<span>You didn't enter a valid number</span>`)
		count = 1
		tableIsComplete = true
	} else {
		count = 1
		tableIsComplete = false
		let a = setInterval(() => {
			table.insertAdjacentHTML("beforeend", `<span>${num} X ${i} = ${num * i}</span>`)
			i++
			if (i > 10) {
				clearInterval(a)
				tableIsComplete = true
				count = 1
			}
		}, 1000)
	}
}

let removeChilds = () => {
	table.innerHTML = ""
}
