import React from 'react';
import {Image, keyframes, usePrefersReducedMotion} from '@chakra-ui/react';
import logo from './logo.png';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = props => {
    return <Image  w={'10%'} src={process.env.PUBLIC_URL + 'ultraYield.png'} {...props} />;
};
