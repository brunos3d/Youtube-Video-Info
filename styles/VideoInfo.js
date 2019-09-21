import css from 'styled-jsx/css';

export default css`
* {
	margin: 0;
	padding: 0;
	font-family: Roboto, Helvetica, Arial, sans-serif;
}

.main-container {
	padding: 10px;
	margin: 50px auto;
	width: 100%;
	max-width: 1000px;
}

table, td, th {  
	text-align: left;
	border: 1px solid #999;
}

table {
	border-collapse: collapse;
	width: 100%;
}

th, td {
	padding: 10px;
}

th {
	background-color: #aaa;
}

tr:hover {
	background-color: #d1e5e8;
}
`;