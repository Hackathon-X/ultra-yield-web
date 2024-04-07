import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Box, Button, Center, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { Logo } from "../Logo";
import MenuLinks from "./MenuLink";
import { NavLink } from "react-router-dom";
import React from "react";


export function NavBar() {
    return (
        <Box
            as="nav"
            shadow="md"
            position="sticky"
            top={0}
            zIndex={10}
        >
            <Flex alignItems="center" ml="18px" mr="18px" mt="10px" pb="16px" gap="2">
                <Logo />
                <Spacer />
                {/* <MenuLinks/> */}
                <Spacer />
                <ColorModeSwitcher />
                <Button>
                    <Text fontSize="md">
                        Connect Wallet
                    </Text>
                </Button>
            </Flex>
        </Box>

    )
}