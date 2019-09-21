import style from "../styles/Home";

const Home = (props) => {
	// const data = props.data;
	// console.log("pass 2", data);

	return (
		<div className="main-container">

			<h1>Home</h1>
			<style jsx>{style}</style>
		</div>
	);
}

Home.getInitialProps = ({ query }) => {
	return { ...query };
};

export default Home;