import { Component } from 'react';
import { Backdrop, ModalImg, StyledModal } from './Modal.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class Modal extends Component {
	// = ({ img, tags, action }) =>
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}
	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	onBackdropClick = e => {
		if (e.currentTarget === e.target) {
			this.props.action('', '');
		}
	};
	handleKeyDown = e => {
		if (e.key === 'Escape') {
			this.props.action('', '');
		}
	};
	render() {
		const { img, tags } = this.props;
		return (
			<Backdrop onClick={this.onBackdropClick}>
				<StyledModal>
					<ModalImg src={img} alt={tags} />
				</StyledModal>
			</Backdrop>
		);
	}
}
