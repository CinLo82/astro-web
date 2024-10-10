import { defineCollection, z } from "astro:content";

const BlogCollection = defineCollection({
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
        author: z.string(),
    })
})

export const Collections = {
    blog: BlogCollection
} 