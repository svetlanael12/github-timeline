import { action, makeObservable, observable } from 'mobx';
import { RepositoryDTO } from '../types/repository';
import axios from 'axios';
import { githubApiUserRepo } from '../constants/api';

export const repositoryStoreObservable = {
    repositories: observable,

    getRepositories: action.bound,
    resetRepositories: action.bound,
    setRepositories: action.bound,
};

export class RepositoryStore {
    repositories: RepositoryDTO[] = [];

    constructor() {
        makeObservable(this, repositoryStoreObservable);
    }

    /**
     * Получить список репозиториев пользователя
     * @param name {string} - имя пользователя
     */
    async getRepositories(name: string): Promise<void> {
        const url = githubApiUserRepo(name);
        console.log('getRepositories');
        axios
            .get<RepositoryDTO[]>(url)
            .then((res) => res.data)
            .then(this.setRepositories)
            .catch((error) => console.log({ error }));
    }

    resetRepositories(): void {
        this.repositories = [];
    }

    setRepositories(repositories: RepositoryDTO[]): void {
        this.repositories = repositories;
        console.log({ repositories: this.repositories });
    }
}
