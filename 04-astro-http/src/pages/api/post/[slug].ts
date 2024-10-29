import type { APIRoute } from "astro";
import { getEntry } from "astro:content";

export const prerender = false;

export const GET: APIRoute = async ({ params, request}) => {

    const { slug } = params

    const post = await getEntry('blog', slug as any)
    if (!post) {
        return new Response(JSON.stringify({ message: 'Post not found' }), { 
            status: 404,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
       return new Response('OK',{ status: 200,})
}
