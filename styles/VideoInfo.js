import css from 'styled-jsx/css';

export default css`
* {
	margin: 0;
	padding: 0;
	font-family: Helvetica, Arial, sans-serif;
}

.main-container {
	padding: 10px;
	margin: 50px auto;
	width: 100%;
	max-width: 1000px;
}

.table-rounded {
	border-collapse: collapse;
}

.table-rounded .table-header th:first-child {
	border-radius: 10px 0 0 0;
}

.table-rounded .table-header th:last-child {
	border-radius: 0 10px 0 0;
}

.table-rounded .table-body tr:last-child td:first-child {
	border: none;
	border-radius: 0 0 0 10px;
}

.table-rounded .table-body tr:last-child td:last-child {
	border: none;
	border-radius: 0 0 10px 0;
}

.table-header tr th {
	padding: 20px 35px;
    color: #00ad5f;
    background-color: #393939;
	border-bottom: 5px solid #555;
	text-align: left;
    text-transform: uppercase;
    font-size: 15px;
	font-weight: normal;
}

.table-body tr td {
	padding: 15px 35px;
    color: #808080;
    background-color: #222222;
	border-bottom: 1px solid #333;
	text-align: left;
	font-size: 15px;
	font-weight: normal;
}

.table-body tr td::selection {
    color: #000;
    background-color: #fff;
}

.table-body tr:hover td::selection {
	color: #fff;
    background-color: #000;
}

.table-body tr:hover td {
    color: #000;
	background-color: #00ad5f;
}

`;