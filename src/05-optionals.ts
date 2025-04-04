export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

// const createProduct2 = (id: string | number, isNew: boolean = true, stock: number = 10) => ({id, stock, isNew})

// || evalua valores falsy (https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
// ?? evalua valores nullish (osea null y undefined)
// && (AND Lógico): Devuelve el primer valor "falsy" o el último valor "truthy". Se usa para validar múltiples condiciones.

// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);
