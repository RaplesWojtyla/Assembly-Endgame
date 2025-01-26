import { Container, Heading, Text } from "@chakra-ui/react"
import { clsx } from "clsx"
import { getFarewellText } from "../utils/utils"

const GameStatus = ({ wrongGuessCount, isGameWon, isGameLost, isGameOver, isLastGuessedIncorrect, languages }) => {
	return (
		<Container
			bg={clsx({
				'#10A95B': isGameWon,
				'#BA2A2A': isGameLost,
				'#7A5EA7': !isGameOver && isLastGuessedIncorrect
			})}
			display={'flex'}
			flexDir={'column'}
			justifyContent={'center'} 
			alignItems={'center'}
			borderRadius={'4px'}
			py={'6px'}
			color={'#F9F4DA'}
			fontWeight={500}
			marginBottom={'35px'}
			maxW={'460px'}
			h={'70px'}
			aria-live="polite"
			role="status"
		>
			{!isGameOver && isLastGuessedIncorrect && (
				<Text>
					{getFarewellText(languages[wrongGuessCount - 1].name)}
				</Text>
			)}

			{isGameWon && (
				<>
					<Heading size={'xl'}>
						You win!
					</Heading>
					<Text>
						Well done! 🎉
					</Text>
				</>
			)}

			{isGameLost && (
				<>
					<Heading size={'xl'}>
						Game over!
					</Heading>
					<Text>
						You lose! Better start learning Assembly 😭
					</Text>
				</>
			)}
		</Container>
	)
}

export default GameStatus
