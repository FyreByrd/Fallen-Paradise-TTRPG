import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const allPostFiles = import.meta.glob(`./*.md`);
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(1, -3);

			console.log(postPath);

			return {
				meta: metadata,
				path: "/classes"+postPath
			};
		})
	);

    const filteredPosts = allPosts.filter(post => {
        return post.path.split("/")[2] !== "index"});

	console.log(filteredPosts);

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