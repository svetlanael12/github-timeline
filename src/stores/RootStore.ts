import { action, makeObservable, observable } from 'mobx';
import { RepositoryStore } from './RepositoryStore';
import { UserStore } from './UserStore';

export const rootStoreObservable = {
    repositoryStore: observable,
    userStore: observable,

    reset: action.bound,
};

export class RootStore {
    repositoryStore: RepositoryStore;
    userStore: UserStore;

    constructor() {
        this.repositoryStore = new RepositoryStore();
        this.userStore = new UserStore();
        makeObservable(this, rootStoreObservable);
    }

    reset() {
        this.repositoryStore.resetRepositories();
        this.userStore.resetUser();
    }
}
