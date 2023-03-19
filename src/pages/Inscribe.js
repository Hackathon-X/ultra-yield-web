import {Box, Container, Textarea, Text} from "@chakra-ui/react";

export function Inscribe() {

    return (
        <Container>
            <Box>
                <Text align="center">
                    Drag and drop your files here
                </Text>
                <Textarea placeholder="Type here..."/>
            </Box>
        </Container>
    )
}