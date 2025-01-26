import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import GameStatus from './components/GameStatus'
import LanguageChips from './components/LanguageChips'
import GuessLetters from './components/GuessLetters'
import Keyboard from './components/Keyboard'
import NewGameButton from './components/NewGameButton'
import { getRandomWord } from './utils/utils'
import { languages } from './store/languages'
import ReactConfetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import ScreenReaderOnly from './components/ScreenReaderOnly'

const App = () => {
	const [darkMode, setDarkMode] = useState(false)
	const [currentWord, setCurrentWord] = useState(getRandomWord)
	const [guessedLetters, setGuessedLetters] = useState([])
	const { width, height } = useWindowSize()


	const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
	const numOfGuessLeft = languages.length - 1 - wrongGuessCount
	const isGameLost = wrongGuessCount >= languages.length - 1 
	const isGameWon = !isGameLost && currentWord.split("").every(letter => guessedLetters.includes(letter))
	const isGameOver = isGameLost || isGameWon
	const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
	const isLastGuessedIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

	const addGuessLetter = (letter) => {
		setGuessedLetters(prevGuessedLetters => prevGuessedLetters.includes(letter) ? prevGuessedLetters : [
			...prevGuessedLetters,
			letter
		])
	}

	const startNewGame = () => {
		setCurrentWord(getRandomWord)
		setGuessedLetters([])
	}

	return (
		<Box minH={'100vh'} py={10} bg={darkMode ? '#282726' : '#F9F4DA'} fontFamily={'Hanken Grotesk'} >
			{isGameWon && (
				<ReactConfetti 
					width={width}
					height={height}
				/>
			)}
			<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
			<Container maxW={'100%'} color={darkMode ? '#F9F4DA' : '#282726'}>
				<Header />
				<GameStatus 
					wrongGuessCount={wrongGuessCount} 
					isGameWon={isGameWon}
					isGameLost={isGameLost}
					isGameOver={isGameOver}
					isLastGuessedIncorrect={isLastGuessedIncorrect}
					languages={languages}
				/>
				<LanguageChips
					wrongGuessCount={wrongGuessCount} 
					languages={languages}
				/>
				<GuessLetters 
					currWord={currentWord} 
					guessedLetters={guessedLetters}
					darkMode={darkMode}
					isGameOver={isGameOver}
				/>

				<ScreenReaderOnly 
					currWord={currentWord}
					guessedLetters={guessedLetters}
					lastGuessedLetter={lastGuessedLetter}
					numOfGuessLeft={numOfGuessLeft}
				/>

				<Keyboard 
					addGuessLetter={addGuessLetter} 
					currWord={currentWord} 
					guessedLetters={guessedLetters}
					darkMode={darkMode}
					isGameOver={isGameOver}
				/>
				{isGameOver && (
					<NewGameButton startNewGame={startNewGame} />
				)}
			</Container>
		</Box>
	)
}

export default App
