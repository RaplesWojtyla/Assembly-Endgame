import { Container, Flex, Icon } from "@chakra-ui/react"
import { Switch } from "./ui/switch";
import { FaMoon, FaSun } from "react-icons/fa"

const Navbar = ({darkMode, setDarkMode}) => {
	return (
		<Container maxW={'1140px'} px={0}>
			<Flex justifyContent={"end"}>
				<Switch
					checked={darkMode}
					onCheckedChange={e => setDarkMode(e.checked)}
					size={'lg'}
					trackLabel={{
						on: (
							<Icon color={'yellow.400'}>
								<FaSun />
							</Icon>
						),
						off: (
							<Icon>
								<FaMoon color="grey.400"/>
							</Icon>
						)
					}}
				/>
			</Flex>
		</Container>
	)
}

export default Navbar
