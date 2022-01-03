
export default class NodesService {

    constructor() { }

    public processChildFormatting(input: any) {
        try {
            const output = [];

            const selfNode: any = {};

            for (const nodes of Object.keys(input)) {
                for (const node of input[nodes]) {
                    if (node['parent_id'] && selfNode.hasOwnProperty([node['parent_id']])) {
                        selfNode[node['parent_id']]['children'].push(node);
                    }
                    selfNode[node['id']] = node;
                }
            }

            for (const node of Object.keys(selfNode)) {
                if (selfNode.hasOwnProperty(node) && selfNode[node]['parent_id'] === null) {
                    output.push(selfNode[node])
                }
            }

            return output;

        } catch (error) {
            throw error;
        }
    }
}