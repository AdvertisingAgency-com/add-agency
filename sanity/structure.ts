import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
	S.list()
		.title("Ad Copies")
		.items([
			orderableDocumentListDeskItem({
				type: "post",
				title: "Posts",
				S,
				context,
			}),
			S.documentTypeListItem("post").title("Posts"),
			S.divider(),
			...S.documentTypeListItems().filter(
				(item) => item.getId() && !["post"].includes(item.getId()!),
			),
		]);
