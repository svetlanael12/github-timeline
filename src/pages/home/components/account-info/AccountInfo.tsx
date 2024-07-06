import { Box, SxProps } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import { GeneralInformation } from './general-information/GeneralInformation';
import { useLoadingContext } from '../../../../hooks/context/useLoadingContext';
import { LoadingWrapper } from '../../../../components/loading-wrapper/LoadingWrapper';
import { LanguageRepositoriesInfo } from './language-repositories-info/LanguageRepositories';
import { useStore } from '../../../../hooks/useStore';

const accountInfoWrapperSx: SxProps = {
    pt: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

export const AccountInfo = observer((): JSX.Element => {
    const { user } = useStore().userStore;
    const { isLoading } = useLoadingContext();

    const isUser = useMemo(() => Boolean(Object.keys(user).length), [user]);

    return (
        <LoadingWrapper isLoading={isLoading}>
            {isUser && (
                <Box sx={accountInfoWrapperSx}>
                    <GeneralInformation />
                    <LanguageRepositoriesInfo />
                </Box>
            )}
        </LoadingWrapper>
    );
});
