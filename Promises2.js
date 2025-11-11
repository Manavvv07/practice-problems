function iAmAsync(){
    let p = new Promise(function(resolve)
    {
        setTimeout(function(){
            resolve("Hi there!")
        }, 1000)
    } ) 
    return p;
}

async function main(){
    let value = await iAmAsync();
    console.log(value);
}

main();