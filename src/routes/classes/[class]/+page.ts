import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const post = await import(`../${params.class}.md`);
    const { title, date } = post.metadata;
    const content = post.default;

	return {
        content,
		title,
		date
    };
}