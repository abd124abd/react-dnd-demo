import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './Constants';
import { DragSource, DragPreview } from 'react-dnd';

const knightSource = {
	beginDrag(props) {
		return {};
	}
};

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		connectDragPreview: connect.dragPreview(),
		isDragging: monitor.isDragging()
	}
}

class Knight extends Component {
	static propTypes = {
		connectDragSource: PropTypes.func.isRequired,
		connectDragPreview: PropTypes.func.isRequired,
		isDragging: PropTypes.bool.isRequired
	};

	componentDidMount() {
		const img = new Image();
		img.src = 'http://1.bp.blogspot.com/-W4raaNB4dUQ/Tldrdv5e0lI/AAAAAAAABVI/pZXofvgbg_0/s640/monkey_zoo_funny_humor_cool_haha_lol_rofl_smiles.jpg';
		img.onload = () => this.props.connectDragPreview(img);
	}

	render() {
		const { connectDragSource, isDragging } = this.props;
		return connectDragSource(
			<div style={{
				opacity: isDragging ? .5 : 1,
				fontSize: 25,
				fontWeight: 'bold',
				cursor: 'move'
			}}>
				&#9816;
			</div>
		);
	}
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);