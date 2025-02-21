import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postType = defineType({
	name: "post",
	title: "Post",
	type: "document",
	icon: DocumentTextIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "isConcept",
			type: "boolean",
			initialValue: true,
		}),

		defineField({
			name: "image",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: "alt",
					type: "string",
					title: "Alternative text",
				}),
			],
		}),

		defineField({
			name: "publishedAt",
			type: "datetime",
		}),
	],
	// preview: {
	//   select: {
	//     title: 'title',
	//     author: 'author.name',
	//     media: 'mainImage',
	//   },
	//   prepare(selection) {
	//     const {author} = selection
	//     return {...selection, subtitle: author && `by ${author}`}
	//   },
	// },
});
