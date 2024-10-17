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
        isDraft: z.boolean().default(false)
    })
})

const authorCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => 
        z.object({
            name: z.string(),
            avatar: image(),
            bio: z.string(),
            twitter: z.string(),
            github: z.string(),
            linkedin: z.string(),
            subtitle: z.string()

        })
})

export const Collections = {
    blog: blogCollection,
    author: authorCollection
} 