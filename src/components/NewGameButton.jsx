import { Button, Container } from "@chakra-ui/react"

const NewGameButton = ({ startNewGame, newGameBtnRef }) => {
	return (
		<Container display={'flex'} justifyContent={'center'} >
			<Button
				ref={newGameBtnRef}
				bg={'#11B5E5'}
				w={'200px'}
				h={'40px'}
				borderRadius={'5px'}
				border={'1px solid #D7D7D7'}
				padding={'6px 12px'}
				fontSize={'1.1rem'}
				fontWeight={600}
				color={'#1E1E1E'}
				onClick={startNewGame}
				_hover={{
					opacity: .7
				}}
			>
				New Game
			</Button>
		</Container>
	)
}

export default NewGameButton
