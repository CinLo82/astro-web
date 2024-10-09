import { defineCollection, z } from "astro:content";

const BlogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string(),

        //Relación
        tags: z.array(z.string()),

        //Relación
        author: z.string(),
    })
})

export const Collections = {
    blog: BlogCollection
} 