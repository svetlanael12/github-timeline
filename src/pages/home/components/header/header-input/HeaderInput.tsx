import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { FormEvent, useState } from 'react';
import { useStore } from '../../../../../hooks/useStore';
import { StyledTextField } from '../../../../../components/styled-components/StyledTextField';
import { useLoadingContext } from '../../../../../hooks/context/useLoadingContext';

export const HeaderInput = observer(() => {
    const { repositoryStore, userStore, reset } = useStore();
    const { loadingStart, loadingStop } = useLoadingContext();
    const { getRepositories } = repositoryStore;
    const { getUserInfo, user } = userStore;

    const [valueField, setValueField] = useState('');

    const onInput = (event: FormEvent<HTMLInputElement>) => {
        setValueField((event.target as HTMLInputElement).value);
    };

    const onKeyDown = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            reset();
            loadingStart();
            await getUserInfo(valueField);
            if (user) {
                await getRepositories(valueField);
            }
            loadingStop();
        }
    };

    return (
        <Box width="100%" maxWidth="500px">
            <StyledTextField
                label="Введите никнейм пользователя"
                variant="standard"
                onInput={onInput}
                value={valueField}
                onKeyDown={onKeyDown}
                fullWidth
            />
        </Box>
    );
});
