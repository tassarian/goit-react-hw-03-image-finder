import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleyItem/ImageGalleryItem';

export const ImageGallery = ({ images, action }) => {
	return (
		<ImageGalleryList>
			{images.map(el => {
				return (
					<ImageGalleryItem
						action={action}
						key={el.id}
						img={el.webformatURL}
						tag={el.tags}
					/>
				);
			})}
		</ImageGalleryList>
	);
};
