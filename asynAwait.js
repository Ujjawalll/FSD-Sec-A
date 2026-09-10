function f1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('Hellooo!!!');
        resolve();
        },4000);
    })
}
async function f2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('AABBEESS!!!');
        resolve();
        },2000);
    })
}
async function test() {
    try {
        await f1();
        await f2();
    } catch (err) {
        console.log("Error", err);
    }
}

test();