function outer(){
    let val = 'test';

    function inner(){
        console.log(val);
    }
    
    return inner;
}

const innerFunc = outer();

innerFunc();