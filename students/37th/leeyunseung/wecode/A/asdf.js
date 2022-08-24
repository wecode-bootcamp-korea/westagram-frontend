let basket = [['양파','곰팡이'],['곰팡이','빵','딸기잼'],['귤','곰팡이','사과']];


function removeG(variable) {
    const result = [];
    for (let i = 0; i < variable.length; i++) {
        // console.log('basketItem: ', basket[i]);
        // const basketItem = variable[i];
    
        const arr = [];
        for (let j = 0; j < variable[i].length; j++) {
            // console.log(`basketItem[${j}]: `, basketItem[j]);
    
            if (variable[i][j] === '곰팡이') {
                continue;
            }
            
            arr.push(variable[i][j]);
        }
    
        result.push(arr);
    }

    return result;
}


console.log(removeG(basket));