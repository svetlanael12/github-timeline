import { Box, LinearProgress, SxProps, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../../../hooks/useStore';
import { beige, blue } from '../../../../../constants/colors';

const generalInformationWrapperSx: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    mr: 4,
    color: blue,
};

const boxImgSx: SxProps = {
    width: '200px',
    height: ' 200px',
    backgroundColor: beige,
    borderRadius: '50%',

    position: 'relative',

    '& img': {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: '50%',
    },
};

export const GeneralInformation = observer((): JSX.Element => {
    const { repositoryStore, userStore } = useStore();
    const { user } = userStore;

    const { name, login, bio, avatar_url, public_repos } = user;

    return (
        <Box sx={generalInformationWrapperSx}>
            <Box sx={boxImgSx}>
                <img src={avatar_url} alt="avatar" />
            </Box>
            <Typography variant="h5">
                {name} ({login})
            </Typography>
            <Typography variant="body1">{bio}</Typography>
            <Typography variant="body1">
                Количество публичных репо: <b>{public_repos}</b>
            </Typography>
        </Box>
    );
});
