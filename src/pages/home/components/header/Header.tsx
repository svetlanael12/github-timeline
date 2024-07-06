import { Box, SxProps, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { HeaderInput } from './header-input/HeaderInput';
import React from 'react';
import { blue } from '../../../../constants/colors';

const headerWrapperSx: SxProps = {
    display: 'flex',
    alignItems: 'center',
};

const headerTextWrapperSx: SxProps = {
    pl: 3,
    color: blue,
};

export const Header = observer((): JSX.Element => {
    return (
        <React.Fragment>
            <Typography variant="h2" color={blue}>
                GitHub timeline
            </Typography>
            <Box sx={headerWrapperSx}>
                <HeaderInput />
                <Box sx={headerTextWrapperSx}>
                    Приложение для просмотра активности пользователя на GitHub. Для работы достаточно просто ввести
                    никнейм пользователя.
                </Box>
            </Box>
        </React.Fragment>
    );
});
