import type { PageLoad } from './$types';
import { postData, filterPosts } from '$lib/posts';

export const load: PageLoad = async ({ params }) => {
	return { 
        members: await filterPosts(import.meta.glob(`./*.md`), "rules"),
        ...postData(await import(/* @vite-ignore */`./index.md`))
    };
}