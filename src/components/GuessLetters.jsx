import { Box, Container, Text } from "@chakra-ui/react"
import clsx from "clsx"

const GuessLetters = ({ currWord, guessedLetters, darkMode, isGameOver }) => {
	const letterElements = currWord.split("").map(letter => (
		<Box 
			bg={darkMode ? '#323232' : 'rgb(242, 232, 183)'}
			color={darkMode ? '#F9F4DA' : 'rgba(0, 0, 0, .8)'}
			w={'50px'}
			h={'50px'}
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			borderBottom={`1px solid ${darkMode ? '#F9F4DA' : 'rgba(0, 0, 0, .5)'}`}
			fontWeight={700}
			fontSize={'1.25rem'}
		>
			<Text 
				color={clsx({
					'#10A95B': isGameOver && guessedLetters.includes(letter),
					'#EC5D49': isGameOver && !guessedLetters.includes(letter)
				})}
			>
				{(isGameOver || guessedLetters.includes(letter)) ? letter.toUpperCase() : ""}
			</Text>
		</Box>
	))  


	return (
		<Container display={'flex'} justifyContent={'center'} gap={'5px'} mb={'36px'} >
			{letterElements}
		</Container>
	)
}

export default GuessLetters
