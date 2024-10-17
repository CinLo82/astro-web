import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image  }) => 
        z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image().refine((img) => img.width < 1200, {
            message: "Image must be at least 1200px wide"
        }),

        //Relación
        tags: z.array(z.string()),

        //Relación
        author: reference('author'),
    })
})

const authorCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => 
        z.object({
            name: z.string(),
            avatar: image()
        })
})

export const Collections = {
    blog: blogCollection,
    author: authorCollection
} 