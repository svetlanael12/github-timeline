import React from 'react';
import ReactDOM from 'react-dom';
import './nullstyle.css';
import { App } from './App';
import { useLocalObservable } from 'mobx-react-lite';
import { RootStore } from './stores/RootStore';
import { RootStoreContext } from './context/RootStoreContext';

const Dom = (): JSX.Element => {
    const rootStore = useLocalObservable(() => new RootStore());
    return (
        <React.StrictMode>
            <RootStoreContext.Provider value={rootStore}>
                <App />
            </RootStoreContext.Provider>
        </React.StrictMode>
    );
};

ReactDOM.render(<Dom />, document.getElementById('root'));
