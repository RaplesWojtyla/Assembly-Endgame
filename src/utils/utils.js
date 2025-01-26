import { words } from "../store/words"

export const getRandomWord = () => {
	const randIndex = Math.ceil(Math.random() * words.length)
	console.log(words[randIndex]);

	return words[randIndex]
}

export const getFarewellText = (language) => {
	const options = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`
    ];

	const randIndex = Math.ceil(Math.random() * options.length)

	return options[randIndex]
}