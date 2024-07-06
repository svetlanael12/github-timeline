import React, { useEffect } from 'react';
import { Home } from './pages/home/Home';
import { observer } from 'mobx-react-lite';
import { SxProps } from '@mui/material';
import { Box } from '@mui/material';
import { green } from './constants/colors';
import { useStore } from './hooks/useStore';

const appWrapperSx: SxProps = {
    maxWidth: '1200px',
    p: 2,
    m: 'auto',
    position: 'relative',

    '&:after': {
        position: 'fixed',
        content: '""',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: green,
        zIndex: -1,
    },
};

export const App = observer(() => {
    const { userStore, repositoryStore } = useStore();
    useEffect(() => {
        userStore.getUserInfo('svetlanael12');
        repositoryStore.getRepositories('svetlanael12');
    }, []);
    return (
        <Box sx={appWrapperSx}>
            <Home />
        </Box>
    );
});
