export default class Node {
    public id: number;

    public title: string;

    public level: number;

    public children: object[];

    public parent_id: string | null;

    constructor(nodeObj: any) {
        this.id = nodeObj.id;
        this.title = nodeObj.title;
        this.level = nodeObj.level;
        this.children = nodeObj.children
        this.parent_id = nodeObj.parent_id
    }
}