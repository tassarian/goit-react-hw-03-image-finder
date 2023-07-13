import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ img, tag, action }) => {
	return (
		<GalleryItem onClick={() => action(img, tag)}>
			<GalleryImg src={img} alt={tag} />
		</GalleryItem>
	);
};
