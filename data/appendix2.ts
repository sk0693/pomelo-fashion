export default {
    "errors": [],
    "meta": {
        "method": 'POST',
        "operation": '/api/nodes/formatNodes',
        "paging": null
    },
    "data": [{
        "id": 10,
        "title": "House",
        "level": 0,
        "children":
            [{
                "id": 12,
                "title": "Red Roof",
                "level": 1,
                "children":
                    [{
                        "id": 17,
                        "title": "Blue Window",
                        "level": 2,
                        "children": [],
                        "parent_id": 12
                    },
                    {
                        "id": 15,
                        "title": "Red Window",
                        "level": 2,
                        "children": [],
                        "parent_id": 12
                    }],
                "parent_id": 10
            },
            {
                "id": 18,
                "title": "Blue Roof",
                "level": 1,
                "children": [],
                "parent_id": 10
            },
            {
                "id": 13,
                "title": "Wall",
                "level": 1,
                "children":
                    [{
                        "id": 16,
                        "title": "Door",
                        "level": 2,
                        "children": [],
                        "parent_id": 13
                    }],
                "parent_id": 10
            }],
        "parent_id": null
    }]
}