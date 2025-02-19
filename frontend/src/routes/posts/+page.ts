import { error } from "@sveltejs/kit";
import client from "$lib/sanity/client";

const query = `*[_type == "post"] {
_id,
title,
slug,
mainImage,
_createdAt,
}`;

export const load = async () => {
	try {
		const posts = await client.fetch(query);

		if (!posts) {
			throw error(404, "Posts not found");
		}

		return {
			posts,
		};
	} catch (err) {
		throw error(500, "Failed to load posts");
	}
};
