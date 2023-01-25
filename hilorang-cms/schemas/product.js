export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            title: "Product Info",
            name: "defaultProductVariant",
            type: "array",
            of: [
                {
                    type: "productVariant",
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: { type: "category" },
                },
            ],
        },
    ],

    preview: {
        select: {
            title: "title",
            manufactor: "manufactor.title",
            media: "defaultProductVariant.images[0]",
        },
    },
};
