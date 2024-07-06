export const githubApiUser = (name: string) => `https://api.github.com/users/${name}`;
export const githubApiUserRepo = (name: string) => `${githubApiUser(name)}/repos`;
