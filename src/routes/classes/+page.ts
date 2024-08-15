import type { PageLoad } from './$types';
import { json } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const allPostFiles = import.meta.glob('/src/markdown/classes/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(13, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

    console.log(allPosts);

	return { classes: allPosts};
}