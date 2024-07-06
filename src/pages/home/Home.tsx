import { observer } from 'mobx-react-lite';
import React from 'react';
import { Header } from './components/header/Header';
import { AccountInfo } from './components/account-info/AccountInfo';
import { LoadingContext } from '../../context/LoadingContext';
import { LoadingModel } from '../../models/LoadingModel';

export const Home = observer((): JSX.Element => {
    const loadingModel = new LoadingModel();
    return (
        <React.Fragment>
            <LoadingContext.Provider value={loadingModel}>
                <Header />
                <AccountInfo />
            </LoadingContext.Provider>
        </React.Fragment>
    );
});
