import Head from "next/head";

import style from "../styles/Page";

function Page({ title, description, children }) {
	return (
		<div>
			<Head>
				<title>{title || "Bruno Silva - Youtube Video Info"}</title>
				<meta
					name="description"
					content={description || "Bruno Silva, Youtube Video Info app"}
				/>
			</Head>

			{children}

			<style jsx>{style}</style>
		</div>
	);
}

export default Page;
