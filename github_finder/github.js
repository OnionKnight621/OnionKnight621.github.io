class GitHub{
    constructor(){
        this.client_id = 'a88f0b00ce2742cf226c';
        this.client_secret = 'b4c3a78602b9f4edbd2e7cde5335ffc3d9e9d394';
        this.repos_count = 5;
        this.repos_sort = 'creatd: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}