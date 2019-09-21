import moment from "moment";

import style from "../../../styles/VideoInfo";

const VideoInfo = (props) => {
	const data = props.data;
	console.log("pass 2", data);

	const {
		videoId,
		url,
		owner,
		channelId,
		title,
		genre,
		paid,
		unlisted,
		isFamilyFriendly,
		duration,
		views,
		datePublished,
		likeCount,
		dislikeCount,
		commentCount,
		channelThumbnailUrl
	} = props.data;

	const dateParts = datePublished.split("-");

	moment.locale("pt-BR");
	const timestamp = moment(new Date(dateParts[0], parseInt(dateParts[1]) - 1, dateParts[2]));
	const videoDurationFormated = new Date(duration * 1000).toISOString().substr(11, 8);

	function formatNumber(value) {
		return value.toLocaleString("pt-BR");
	}

	function formatBoolean(value) {
		return value ? "TRUE" : "FALSE";
	}

	return (
		<div className="main-container">
			<table className="table-rounded">
				<thead className="table-header">
					<tr>
						<th>Propriedades</th>
						<th>Valores</th>
					</tr>
				</thead>
				<tbody className="table-body">
					<tr>
						<td>Título</td>
						<td>{title}</td>
					</tr>
					<tr>
						<td>Canal</td>
						<td>{owner}</td>
					</tr>
					<tr>
						<td>Views</td>
						<td>{formatNumber(views)}</td>
					</tr>
					<tr>
						<td>Likes</td>
						<td>{formatNumber(likeCount)}</td>
					</tr>
					<tr>
						<td>Dislikes</td>
						<td>{formatNumber(dislikeCount)}</td>
					</tr>
					<tr>
						<td>Comentários</td>
						<td>{commentCount}</td>
					</tr>
					<tr>
						<td>Duração</td>
						<td>{videoDurationFormated} (HH:MM:SS)</td>
					</tr>
					<tr>
						<td>Data de publicação</td>
						<td>{timestamp.format("L")} ({timestamp.fromNow()})</td>
					</tr>
					<tr>
						<td>ID do Video</td>
						<td>{videoId}</td>
					</tr>
					<tr>
						<td>URL</td>
						<td>{url}</td>
					</tr>
					<tr>
						<td>ID do Canal</td>
						<td>{channelId}</td>
					</tr>
					<tr>
						<td>Gênero</td>
						<td>{genre.toString()}</td>
					</tr>
					<tr>
						<td>Não listado</td>
						<td>{formatBoolean(unlisted)}</td>
					</tr>
					<tr>
						<td>Contém promoção paga</td>
						<td>{formatBoolean(paid)}</td>
					</tr>
					<tr>
						<td>Livre para todos (Family-Friendly)</td>
						<td>{formatBoolean(isFamilyFriendly)}</td>
					</tr>
					<tr>
						<td>Thumbnail URL</td>
						<td>{channelThumbnailUrl}</td>
					</tr>
				</tbody>
			</table>

			<style jsx>{style}</style>
		</div>
	);
}

VideoInfo.getInitialProps = ({ query }) => {
	return { ...query };
};

export default VideoInfo;