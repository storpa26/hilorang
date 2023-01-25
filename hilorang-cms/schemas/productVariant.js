export default {
    title: "Product Variant",
    name: "productVariant",
    type: "object",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Weight in grams",
            name: "grams",
            type: "number",
        },
        {
            title: "Price",
            name: "price",
            type: "number",
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
    ],
};
