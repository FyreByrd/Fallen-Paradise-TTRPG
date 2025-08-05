export function postData(post: any) {
    const { title, created, modified, flavor, ...rest } = post.metadata;
    const content = post.default;

	return {
        content,
		title,
		created,
		modified,
		flavor,
		rest
    };
}

export async function filterPosts(all: Record<string, () => Promise<unknown>>, parent: string) {
	return (await Promise.all(
		Object.entries(all).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(1, -3);

			return {
				meta: metadata,
				path: "/"+parent+postPath
			};
		})
	)).filter(post => { return post.path.split("/").at(-1) !== "index"});
}