let productsList = [];

const addToCart = (prod, quant) => {
	productsList.map((item) => {
		const product = productsList.find((i) => i.product.id === prod.id);
		product ? (item.quantity += quant) : productsList.push({product: prod, quantity: quant});
	});
};

export {productsList, addToCart};
