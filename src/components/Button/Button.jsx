import { StyledButton } from './Button.styled';

export const Button = ({ action }) => {
	return (
		<>
			<StyledButton type="button" onClick={action}>
				Load more
			</StyledButton>
		</>
	);
};
