import React from "react";
import {Box, Stack} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

const MenuLinks = ({isOpen}) => {
    return (
        <Box
            display={{base: isOpen ? "block" : "none", md: "block"}}
            flexBasis={{base: "100%", md: "auto"}}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <NavLink to={"/"}>
                    Home
                </NavLink>
                <NavLink to={"/wallet"}>
                    Wallet
                </NavLink>
                <NavLink to={"/inscribe"}>
                    Inscribe
                </NavLink>
                <NavLink to={"/docs"}>
                    Docs
                </NavLink>
            </Stack>
        </Box>
    );
};

export default MenuLinks;