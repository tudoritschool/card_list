import React from "react";
import {
	Button,
	Card,
	CardBody,
	CardSubtitle,
	CardTitle,
	CardText,
	CardImg,
} from "reactstrap";
import ProductButton from "../styled_components/ProductButton.style";

function Product({ title, description, price }) {
	return (
		<Card className='card_background'>
			<CardImg
				src={`https://picsum.photos/seed/${title
					.replace(" ", "_")
					.toLowerCase()}/200/100`}
			/>
			<CardBody>
				<CardTitle tag='h2'>{title}</CardTitle>
				<CardText>{description}</CardText>
				<CardSubtitle tag='h4'> {price} lei</CardSubtitle>
				<ProductButton outline={true} width={"100%"}>
					Cumpara acum!
				</ProductButton>
			</CardBody>
		</Card>
	);
}

export default Product;
