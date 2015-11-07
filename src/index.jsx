import React from 'react';
import ReactDOM from 'react-dom';
import Knight from './Knight';
import Square from './Square';

ReactDOM.render(
		<Square black>
			<Knight />
		</Square>,
	document.getElementById('root')
);
