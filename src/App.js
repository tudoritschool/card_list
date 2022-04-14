import "./App.css";
import Product from "./components/Product";
import { Container, Row, Col } from "reactstrap";
import PageTitle from "./styled_components/PageTitle.style";

function App() {
	return (
		<Container>
			<Row>
				<Col lg={{ offset: 4, size: 4 }}>
					<PageTitle>Pagina cu produse</PageTitle>
				</Col>
			</Row>
			<Row className='row_background'>
				<Col lg='3' md='6' sm='12'>
					<Product
						title='Rochie de mireasa'
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
