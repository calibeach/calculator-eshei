type Operations = {
    [operation: string]: (a: number, b: number) => number
}

const calculate: Operations = {
    "/": (a , b ) => a / b,
    "X": (a , b ) => a * b,
    "-": (a , b ) => a - b,
    "+": (a , b) => a + b
 }

 const OPERATIONS_ARRAY = ["/" , "X", "-", "+"]

 const HIGHER_ORDER_OPERATIONS_ARRAY = ["/", "X"]

 export {
    calculate,
    HIGHER_ORDER_OPERATIONS_ARRAY,
    OPERATIONS_ARRAY
 }