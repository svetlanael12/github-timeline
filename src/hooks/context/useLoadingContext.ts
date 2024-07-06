import { useContext } from 'react';
import { LoadingModel } from '../../models/LoadingModel';
import { LoadingContext } from '../../context/LoadingContext';

export const useLoadingContext = (): LoadingModel => {
    return useContext(LoadingContext);
};
