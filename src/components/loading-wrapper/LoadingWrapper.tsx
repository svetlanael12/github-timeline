import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyledLinearProgress } from '../styled-components/StyledLinearProgress';

export type LoadingWrapperProps = {
    isLoading: boolean;
    children: React.ReactNode;
};

export const LoadingWrapper = observer((props: LoadingWrapperProps): JSX.Element => {
    const { isLoading, children } = props;

    return (
        <React.Fragment>
            {isLoading ? <StyledLinearProgress /> : <React.Fragment>{children}</React.Fragment>}
        </React.Fragment>
    );
});
