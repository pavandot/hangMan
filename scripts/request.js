const getPuzzel= async(wordCount) => {
	const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
	if(response.status === 200) {
		const data =await response.json()
		return data.puzzle
	} else {
		throw new Error ('data is not fetched ')
	}
}

// const getCountry=async(countryCode) => {
// 	const response = await fetch('http://restcountries.eu/rest/v2/all')
// 	if(response.status === 200) {
// 		const data = await response.json()
// 		return data.find((country) => {
// 			return country.alpha2Code === countryCode
// 		})
// 	} else {
// 		throw new Error ('data is not fetched')
// 	}
// }


// const getLocation = async () => {
// 	const response = await fetch('https://ipinfo.io/json?token=23e81f46d3707b')  
// 	if(response.status === 200) {
// 		return response.json()
// 	} else {
// 		throw new Error ('location is not fetched')
// 	}
// }

// const getCurrentCountry = async () => {
// 	const location = await getLocation()
// 	return getCountry(location.country)
// }