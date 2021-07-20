/*
关于此段代码的解释
生成器函数与async，await原理一致均为Promise 区别如下
1.async,await被_asyncGenerator包裹会立马出发_next(undfined)
2.async,await选择 在存在await上会触发改await分支代码 如同生成器函数组合yiled* + next()
*/ 
async function main() {
    function timer() {
        console.log('123213')
    }

    // await timer();
}

function pro() {
    return new Promise((resolve, reject) => {
        resolve(1)
    })
}

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}
  
let g = gen();
g.next()

main()

pro().then(res=>{})
