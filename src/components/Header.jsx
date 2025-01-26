import { Container, Heading, Text } from "@chakra-ui/react"

const Header = () => {
	return (
		<Container pt={20} pb={10} display={'flex'}flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
			<Heading textAlign={'center'} fontWeight={500} fontSize={"1.25rem"} mb={'5px'}>
				Assembly: EndGame
			</Heading>
			<Text
				textAlign={'center'}
				maxW={450}
			>
				Guess the word in under 8 attempts to keep the programming world safe from Assembly!
			</Text>
		</Container>
	)
}

export default Header
