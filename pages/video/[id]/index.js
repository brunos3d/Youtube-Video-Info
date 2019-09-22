import Page from "../../../components/Page";
import Table from "../../../components/Table";

import style from "../../../styles/VideoInfo";

const VideoInfo = (props) => {
	// const data = props.data;
	// console.log("pass 2", data);

	return (
		<div>
			<Page title={"YVI - " + props.data.title}>
				<div className="main-container">

					<Table data={props.data} />
				</div>
			</Page>

			<style jsx>{style}</style>
		</div>
	);
}

VideoInfo.getInitialProps = ({ query }) => {
	return { ...query };
};

export default VideoInfo;