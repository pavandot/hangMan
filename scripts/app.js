const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1 

window.addEventListener('keypress', function (e) {
	const guess = String.fromCharCode(e.charCode)
	game1.makeGuess(guess)
	render()
})

document.querySelector('#reset').addEventListener('click',() => {
	startGame()
})

const render = () => {
    puzzleEl.innerHTML=''
	guessesEl.textContent = game1.StatusMessage
	game1.Puzzle.split('').forEach((letter) => {
		const letterEl = document.createElement('span')
		letterEl.textContent=letter
		puzzleEl.appendChild(letterEl)
	})
}

const startGame = async () => {
	const puzzle = await getPuzzel('1')
	console.log(puzzle)
	game1 = new Hangman(puzzle,5) 
	render()
}
startGame()
// getPuzzel('1').then((puzzle) => {
// 	console.log(puzzle)
// }).catch ((err) => {
// 	console.log(err)
// })

// getCurrentCountry().then((country) => {
// 	console.log(country.name)
// }).catch((error) => {
// 	console.log(`Error: ${error}`)
// })
