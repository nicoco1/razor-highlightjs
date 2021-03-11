import * as React from 'react';
import { ReactNode } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { RazorEditor } from '@nicoco1/razor-highlightjs';

import { Container, Heading, Stack, Text } from '@chakra-ui/react';


export const App = () => {
    return (
        <div className='App'>
            <NavigationBar />
            <DemoContainer>
                <DemoHero />
                <RazorEditor />
            </DemoContainer>
        </div>
    );
};

const DemoHero = () => (
    <Stack textAlign={'center'} align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
            Razor syntax{' '}
            <Text as={'span'} color={'red.400'}>
                HighlightJS
            </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
            Try it here!
        </Text>
    </Stack>
);

const DemoContainer = ({ children }: { children: ReactNode }) => {
    return <Container maxW={'5xl'}>{children}</Container>;
};
