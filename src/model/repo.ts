export default class Repo {
    public page: number;

    public total_count: number;

    public items: [];

    constructor(repoObj: any) {
        this.page = repoObj.page;
        this.total_count = Math.min(repoObj.pageCount, 10);
        this.items = repoObj.items;
    }

    public toObject () {
        return {
            page: this.page,
            pageCount: this.total_count
        }
    }
}