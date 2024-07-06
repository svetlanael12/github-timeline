import { action, makeObservable, observable } from 'mobx';
import { RepositoryDTO } from '../types/repository';
import axios from 'axios';
import { githubApiUser, githubApiUserRepo } from '../constants/api';
import { UserDTO } from '../types/user';

export const userStoreObservable = {
    user: observable,

    getUserInfo: action.bound,
    resetUser: action.bound,
    setUser: action.bound,
};

export class UserStore {
    user: UserDTO = {} as UserDTO;

    constructor() {
        makeObservable(this, userStoreObservable);
    }

    /**
     * Получить полную информацию о пользователе
     * @param name {string} - имя пользователя
     */
    async getUserInfo(name: string): Promise<void> {
        const url = githubApiUser(name);
        axios
            .get<UserDTO>(url)
            .then((res) => res.data)
            .then(this.setUser)
            .catch((error) => console.log({ error }));
    }

    resetUser(): void {
        this.user = {} as UserDTO;
    }

    setUser(user: UserDTO): void {
        this.user = user;
    }
}
