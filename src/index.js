// function eval() {
//     // Do not use eval!!!
//     return;
// }
//
function expressionCalculator(expr) {

    let expArr = expr.trim().replace(/["']/g,'').split(' ');
    let expObj = {};
    let expRes = '';
    let expConstructor = null;

    const add = (key, value, obg) => {
        obg['a'+ key] = value;
    };

    expArr.forEach((elem, index) => {
        if (elem !== ''){
            add(index, elem, expObj);
        }
        return;
    });

    for (let keys in expObj) {
        expRes += `${expObj[keys]}`;
    };

    if(expRes.indexOf('/0') !== -1){
        throw new Error("TypeError: Division by zero.");
    }

    if ( expRes.match(/[^(]/g).length != expRes.match(/[^)]/g).length ) {
        throw new Error("ExpressionError: Brackets must be paired");
    }

    expConstructor = new Function(`return ${expRes}`);

    return expConstructor();

}

module.exports = {
    expressionCalculator
}
