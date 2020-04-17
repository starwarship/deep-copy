function checkType(target) {
    return Object.prototype.toString.call(target).slice(8,-1)
}
function clone(target) {
    let result, targetType = checkType(target);
    if (targetType === 'Object') {
        result = {};
    }
    else if(targetType==='Array'){
        result=[]
    }
    else {
        return target;
    }

    for (let i in target)
    {
        let value = target[i];
        if (checkType(value) === 'Object' || checkType(value) === 'Array') {
            result[i]=clone(value)
        } else {
            result[i]=value
        }
    }
    return result;
}

let a = [1, [2, [3, 4]], 4, 5, 8];
let b = clone(a);
let c;
console.log(a);
console.log(b);
c = a;
console.log(c);