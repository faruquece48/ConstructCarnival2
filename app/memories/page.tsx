"use client";

import { title } from "@/components/primitives";
import PhotoAlbum from "react-photo-album";

const photos = [
	{
		src: "/gallery/image_1.jpg",
		width: 800,
		height: 600,
		title: "Image 1",
		srcSet: [
			{ src: "/gallery/image_1.jpg", width: 400, height: 300 },
			{ src: "/gallery/image_1.jpg", width: 200, height: 150 },
		],
	},
	{
		src: "/gallery/image_2.jpg",
		width: 1600,
		height: 900,
		srcSet: [
			{ src: "/gallery/image_2.jpg", width: 800, height: 450 },
			{ src: "/gallery/image_2.jpg", width: 400, height: 225 },
		],
	},
	{
		src: "/gallery/image_3.jpeg",
		width: 1600,
		height: 900,
		srcSet: [
			{ src: "/gallery/image_3.jpeg", width: 800, height: 450 },
			{ src: "/gallery/image_3.jpeg", width: 400, height: 225 },
		],
	},
	{
		src: "/gallery/image_4.jpeg",
		width: 1600,
		height: 900,
		srcSet: [
			{ src: "/gallery/image_4.jpeg", width: 800, height: 450 },
			{ src: "/gallery/image_4.jpeg", width: 400, height: 225 },
		],
	},
	{
		src: "/gallery/image_5.jpg",
		width: 1600,
		height: 900,
		srcSet: [
			{ src: "/gallery/image_5.jpg", width: 800, height: 450 },
			{ src: "/gallery/image_5.jpg", width: 400, height: 225 },
		],
	},
];

export default function MemoriesPage() {
	return (
		<div className="flex flex-col">
			<h1 className={title({ className: "my-5" })}>Coming Soon...</h1>

			{/* <h2 className="text-2xl font-bold my-3">Construct Carnival 1.0</h2> */}
			{/* <PhotoAlbum
				layout="rows"
				photos={photos}
				renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
					<div style={{ position: "relative", ...wrapperStyle }}>
						{renderDefaultPhoto({ wrapped: true })}
						{photo.title && (
							<div
								style={{
									position: "absolute",
									overflow: "hidden",
									backgroundColor: "rgba(255 255 255 / .6)",
									inset: "auto 0 0 0",
									padding: 8,
								}}
							>
								{photo.title}
							</div>
						)}
					</div>
				)}

			// padding={10}
			// renderContainer={({ children }) => (
			// 	<div className="flex flex-wrap gap-4">{children}</div>
			// )}
			/> */}
			{/* <h3 className="text-2xl font-bold mt-10">About Contruct Carnival 1.0</h3>
			<p className="my-5">
				This section will be updated soon. Stay tuned for more updates.
			</p> */}
		</div>
	);
}
