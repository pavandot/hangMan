const getPuzzel=(wordCount) => new Promise ((resolve,reject) => {
	const request = new XMLHttpRequest()
	request.addEventListener('readystatechange' ,(e) => {
		if(e.target.readyState === 4 && e.target.status === 200) {
			const data =JSON.parse(e.target.responseText)
			resolve(data.puzzle)
		} else if(e.target.readyState === 4) {
			reject('an error is taken place')
		}
	})

	request.open('GET' ,`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
	request.send()
	})


const getCountry=(countryCode) => new Promise((resolve,reject) => {

	const request1 = new XMLHttpRequest()

	request1.addEventListener('readystatechange', (e) => {
		if(e.target.readyState === 4 && e.target.status === 200) {
			const data =JSON.parse(e.target.responseText)
			country=data.find((country) => {
					return country.alpha2Code === countryCode
				})
			resolve(country)
		} else if (e.target.readyState === 4 && e.target.status > 300){
			reject("error is taken place")
		}
	})
	request1.open('GET', 'http://restcountries.eu/rest/v2/all')
	request1.send()
})

