import { Container, Flex } from "@chakra-ui/react"
import { Tag } from "./ui/tag"

const LanguageChips = ({ languages, wrongGuessCount }) => {
	const languageChips = languages.map((langObj, index) => {
		const farewell = {
			content: '"💀"',
			position: "absolute",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "100%",
			width: "100%",
			fontSize: "0.85rem",
			top: 0,
			left: 0,
			borderRadius: "4px",
			bg: "rgba(0, 0, 0, 0.5)"
		}

		return (
			<Tag
				key={langObj.name}
				bg={langObj.backgroundColor}
				color={langObj.color}
				padding={'8px'}
				h={'30px'}
				borderRadius={'3px'}
				variant={'subtle'}
				fontSize={'.75rem'}
				fontWeight={700}
				position={'relative'}
				_before={index < wrongGuessCount ? farewell : {}}
			>
				{langObj.name}
			</Tag>
		)
	})

	return (
		<Container maxW={'370px'} mb={'36px'}>
			<Flex flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} gap={'5px'}>
				{languageChips}
			</Flex>
		</Container>
	)
}

export default LanguageChips
