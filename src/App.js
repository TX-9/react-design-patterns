import { Modal } from "./Modal";
import { LargeProductDetails } from "./products/LargeProductDetails";

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

function App() {
  return (
    <>
    <Modal>
      <LargeProductDetails product={products[0]} />
    </Modal>
    </>
  );
}

export default App;
