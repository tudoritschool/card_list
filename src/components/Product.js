import { Button } from "reactstrap";

function Product({ title, description, price }) {
	return (
		<div className='mb-4' style={{ backgroundColor: "darkred" }}>
			<h2>{title}</h2>
			<p>{description}</p>
			<p> {price} lei</p>
			<Button color='primary' outline>
				Text buton
			</Button>
		</div>
	);
}

export default Product;
