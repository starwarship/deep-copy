function curry(fn) {
    let g = (...allArgs) => allArgs.length >= fn.length ? fn(...allArgs) : (...args) => g(...allArgs, ...args);
    return g;
}

let foo = curry((a, b, c, d) => {
    console.log(a, b, c, d);
})
foo(1)(2)(3)(4)


function add(a) {
    return function (b) {
        return  function (c) {
            return a + b + c;
        }
    }
}
console.log(add(1)(2)(3));
