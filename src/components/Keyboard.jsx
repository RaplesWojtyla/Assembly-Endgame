import { Button, Container, Flex } from "@chakra-ui/react"
import { clsx } from "clsx"

const Keyboard = ({ addGuessLetter, currWord, guessedLetters, darkMode, isGameOver }) => {
	const keyboardAlphabet = "abcdefghijklmnopqrstuvwxyz"

	const keyElements = keyboardAlphabet.split("").map(letter => (
		<Button
			bg={clsx({
				'#FCBA29': !guessedLetters.includes(letter),
				'#10A95B': currWord.includes(letter) && guessedLetters.includes(letter),
				'#EC5D49': !currWord.includes(letter) && guessedLetters.includes(letter)
			})}
			h={'40px'}
			w={'40px'}
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			padding={'6px'}
			borderRadius={'4px'}
			border={`1px solid ${darkMode ? '#D7D7D7' : 'rgba(0, 0, 0, .55)'}`}
			color={'#1E1E1E'}
			fontSize={'1.1rem'}
			fontWeight={600}
			onClick={() => addGuessLetter(letter)}
			disabled={isGameOver}
			aria-label={`Letter ${letter}`}
			// aria-disabled={guessedLetters.includes(letter)}
			_hover={{
				opacity:.75
			}}
		>
			{letter.toUpperCase()}
		</Button>
	))

	return (
		<Container maxW={'550px'} mb={'40px'}>
			<Flex  flexWrap={'wrap'}  justifyContent={'center'} gap={'6px'} >
				{keyElements}
			</Flex>
		</Container>
	)
}

export default Keyboard
