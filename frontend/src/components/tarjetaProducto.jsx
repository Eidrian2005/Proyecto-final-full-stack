import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddToCartButton from './carrito';

function Tarjeta() {

    // const [productos, setProductos] = useState([]);

    // const fetchProducts = async () => {
    //   try {
    //     const products = await getProducts();
    //     setProductos(products);
  
    //   } catch (error) {
    //     console.error('Error al obtener productos:', error);
    //     Swal.fire({
    //       icon: "error",
    //       title: "Error",
    //       text: "No se pudieron cargar los productos.",
    //     });
    //   }
    // };
  
    // useEffect(() => {fetchProducts()}, [fetchProducts]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <AddToCartButton/>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;