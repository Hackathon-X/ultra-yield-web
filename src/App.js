import React from 'react';
import {
    ChakraProvider,
    theme,
} from '@chakra-ui/react';
import {Home} from "./pages/Home";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </ChakraProvider>
    );
}

export default App;
