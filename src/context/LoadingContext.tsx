import { LoadingModel } from '../models/LoadingModel';
import React from 'react';

export const LoadingContext = React.createContext<LoadingModel>({} as LoadingModel);
