type Size = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Size;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
});

const addProduct = (data: Product) => {
  products.push(data);
};

// Different ways to implement interfaces and types from interfaces
interface ExtendedProduct extends Product {
  category: string;
  description?: string;
}

const extendedProducts: ExtendedProduct[] = [];

type ExtendedProduct2 = Product & {
  category: string;
  description?: string;
};

const extendedProducts2: ExtendedProduct2[] = [];

class ProductItem implements Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Size;

  constructor(
    id: string | number,
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  ) {
    this.id = id;
    this.title = title;
    this.createdAt = createdAt;
    this.stock = stock;
    this.size = size;
  }
}

const newProduct = new ProductItem('2', 'p2', new Date(), 50, 'M');
products.push(newProduct);
