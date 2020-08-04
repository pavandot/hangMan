const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('pavan kumar', 2)

puzzleEl.textContent = game1.Puzzle
guessesEl.textContent = game1.StatusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.Puzzle
    guessesEl.textContent = game1.StatusMessage
})


getPuzzel('1').then((data) => {
	console.log(data)
},(data) => {
	console.log(`Error: ${data}`)
})

const countryCode='IN'
getCountry(countryCode).then((data) => {
		console.log(`The country name is ${data.name}`)
	},(data) => {
		console.log(`Error:${error}`)
	})
