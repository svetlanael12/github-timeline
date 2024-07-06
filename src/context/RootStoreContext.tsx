import { RootStore } from '../stores/RootStore';
import React from 'react';

export const RootStoreContext = React.createContext<RootStore>({} as RootStore);
