export interface Items {
    name: number;
    path: number;
    url: string;
}

export interface Repository {
    total_count: number;
    currentPage: number;
    items: Items,
    pageCount: number
}