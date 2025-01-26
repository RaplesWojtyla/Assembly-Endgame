import { Container, Text } from "@chakra-ui/react"

const ScreenReaderOnly = ({ currWord, guessedLetters, lastGuessedLetter, numOfGuessLeft }) => {
	return (
		<Container
			position={'absolute'}
			w={'1px'}
			h={'1px'}
			padding={0}
			margin={'-1px'}
			overflow={'hidden'}
			clip={'rect(0, 0, 0, 0)'}
			whiteSpace={'nowrap'}
			border={0}
			aria-live="polite"
			role="status"
		>
			<Text>
				{currWord.includes(lastGuessedLetter) ? 
					`Correct! The letter ${lastGuessedLetter} is in the word.` : 
					`Sorry, the letter ${lastGuessedLetter} is not in tht word.`
				}
				You have {numOfGuessLeft} attempts left.
			</Text>

			<Text>
				Current word: {currWord.split("").map(letter => (
					guessedLetters.includes(letter) ? letter + '.' : 'blank.'
				)).join(" ")}
			</Text>
		</Container>
	)
}

export default ScreenReaderOnly
