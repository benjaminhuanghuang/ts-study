
```
interface Product {
name: string;
unitPrice: number;
}
export { Product }
```


we can also rename exported items using the as keyword:
```
interface Product {
name: string;
unitPrice: number;
}
export { Product as Stock }
```

Default exportss
```
export default interface {
  name: string;
  unitPrice: number;
}
```

## import
```
import { Product as Stock } from "./product";
```

import default exportss
```
  import Product from "./product";
```