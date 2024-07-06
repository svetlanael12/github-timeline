import { action, makeAutoObservable, observable } from 'mobx';

export const loadingModelObservable = {
    isLoading: observable,

    loadingStart: action.bound,
    loadingStop: action.bound,
    setIsLoading: action.bound
};

export class LoadingModel {
    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this, loadingModelObservable);
    }

    loadingStart(): void {
        this.isLoading = true;
    }

    loadingStop(): void {
        this.isLoading = false;
    }

    setIsLoading(isLoading: boolean): void {
        this.isLoading = isLoading;
    }
}
