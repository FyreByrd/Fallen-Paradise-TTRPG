import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const allPostFiles = import.meta.glob(`./*.md`);
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

    const filteredPosts = allPosts.filter(post => {
        return post.path.split("/")[2] !== "index"});

    const post = await import(/* @vite-ignore */`./index.md`);
    const { title, date } = post.metadata;
    const content = post.default;

	return { 
        members: filteredPosts,
        content,
		title,
		date
    };
}