import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

ReactDOM.render(
	<Board knightPosition={[1, 0]} />,
	document.getElementById('root')
);
