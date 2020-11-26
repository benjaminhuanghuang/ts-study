
An interface is a contract that defines a type with a collection of property and method definitions without any implementation

```
interface OrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number;
}


const tableOrder: OrderDetail = {
  product: table,
  quantity: 1,
  getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice *
    this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
};

```


type alias creates a new name for a type.

It makes the code more readable.
```
type GetTotal = (discount: number) => number;

interface OrderDetail {
  product: Product;
  quantity: number;
  getTotal: GetTotal;
}
```


The main difference is that type aliases can't be extended or implemented from like you can with interfaces


classes have many more features than interfaces and type aliases
```
interface IOrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number;
}
class OrderDetail implements IOrderDetail {
  product: Product;
  quantity: number;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice *
    this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}


const orderDetail = new OrderDetail(table, 2);
```
- class can define the implementation of methods in a class
- class can implement an interface
- class have constructor
- classes can extend other classes



abstract class
```
abstract class Product {
  name: string;
  unitPrice: number;
  abstract delete(): void;
}
```