import { RootStoreContext } from '../context/RootStoreContext';
import React, { useContext } from 'react';
import { RootStore } from '../stores/RootStore';

export const useStore = (): RootStore => {
    return useContext(RootStoreContext);
};
