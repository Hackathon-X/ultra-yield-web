import React from 'react';
import {
    ChakraProvider,
    theme,
} from '@chakra-ui/react';
import {Home} from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import {RootLayout} from "./layouts/RootLayout";
import {Wallet} from "./pages/Wallet";
import {Inscribe} from "./pages/Inscribe";
import {Docs} from "./pages/Docs";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Routes>
                <Route path="/" element={<RootLayout/>}>
                    <Route index element={<Home/>}/>
                    {/* <Route path="wallet" element={<Wallet/>}/>
                    <Route path="inscribe" element={<Inscribe/>}/>
                    <Route path="docs" element={<Docs/>}/> */}
                </Route>
            </Routes>
        </ChakraProvider>
    );
}

export default App;
