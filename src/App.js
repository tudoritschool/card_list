import "./App.css";
import Product from "./components/Product";
import { Container, Row, Col } from "reactstrap";

function App() {
	return (
		<Container>
			<Row>
				<Col lg={{ offset: 4, size: 4 }}>
					<h1>Pagina cu produse</h1>
				</Col>
			</Row>
			<Row>
				<Col lg='3' md='6' sm='12'>
					<Product
						title='Rochie'
						description='Rochie de mireasa'
						price={3000}
					/>
				</Col>
				<Col lg='3' md='6' sm='12'>
					<Product title='Pantaloni' description='Pantaloni luni' price={100} />
				</Col>
				<Col lg='3' md='6' sm='12'>
					<Product title='Pantofi' description='pantofi dama' price={300} />
				</Col>
				<Col lg='3' md='6' sm='12'>
					<Product title='Tricou' description='Tricou de vara' price={60} />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
