import {ColorModeSwitcher} from "../ColorModeSwitcher";
import {Box, Button, Center, HStack, Spacer, Text} from "@chakra-ui/react";
import {Logo} from "../Logo";
import MenuLinks from "./MenuLink";


export function NavBar() {
    return (
        <Box
            as="nav"
            shadow="md"
            position="sticky"
            top={0}
            zIndex={10}
        >
            <Box mt="10px" ml="18px" mr="18px" pb="10px">
                <HStack gap="">
                    <Center>
                        <Logo/>
                    </Center>
                    <Spacer/>
                    <Center ml="" mr="">
                        <Text bgGradient="linear(to-r, #7928CA,#FF0080)"
                              bgClip="text"
                              fontSize="xl"
                              fontWeight="normal">
                            Ordinals Web3
                        </Text>
                    </Center>
                    <Spacer/>
                    <MenuLinks/>
                    <ColorModeSwitcher/>
                    <Button>
                        <Text fontSize="md">
                            Connect Wallet
                        </Text>
                    </Button>
                </HStack>
            </Box>
        </Box>

    )
}