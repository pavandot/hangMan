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

//making HTTP request 
const request = new XMLHttpRequest()
request.addEventListener('readystatechange' ,(e) => {
	if(e.target.readyState === 4 && e.target.status === 200) {
		const data =JSON.parse(e.target.responseText)
		console.log(data)
	} else if(e.target.readyState === 4) {
		console.log("And an error is taken")
	}
})

request.open('GET' ,'http://puzzle.mead.io/puzzle')
request.send()
//making HTTP request 
const countryCode='US'
const request1 = new XMLHttpRequest()

request1.addEventListener('readystatechange', (e) => {
	if(e.target.readyState === 4 && e.target.status === 200) {
		const data =JSON.parse(e.target.responseText)
		countryName=data.find((country) => {
				return country.alpha2Code === countryCode
			})
		console.log(countryName.name)
	}
})
request1.open('GET', 'http://restcountries.eu/rest/v2/all')
request1.send()
#
