//Ajax

//synch => asynch

//asych => sych ==> dependacy

//if there is not dependacy => parallel execution/ combinator

//1. Promise.all()
//2. Prmise.race()
//3. Promise.any()
//4. Promise.allsettle()

//1. Promise.all() => shortcircut at first reject state

// async function promiseAll() {
//     let result = await Promise.all([
//         Promise.resolve("hello"),
//         Promise.resolve("hello"),
//         Promise.resolve("hello"),
//         Promise.reject("bye"),
//         Promise.resolve("hello ALl"),
//         Promise.reject("good bye"),
//     ])
//     console.log(result)
// }
// promiseAll()

// async function promiseAll() {
//     try{
//         let result = await Promise.all([
//             Promise.resolve("hello"),
//             Promise.resolve("hello"),
//             Promise.resolve("hello"),
//             Promise.reject("bye"),
//             Promise.resolve("hello ALl"),
//             Promise.reject("good bye"),
//         ])
//         console.log(result)
//     }
//    catch{
//     console.log("Something went wrong")
//    }
// }
// promiseAll()

//===================================================

//2. Promise.race()

// function one() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Hello")
//         }, 3000)
//     })
// }

// function two() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Heyyyy")
//         }, 2000)
//     })
// }
// async function promiseRace() {
//     let output = await Promise.race([
//         one(),
//         two()
//     ])
//     console.log(output)
// }
// promiseRace()

//=================================================

//3. promise.allsettle()

// async function promiseAllsettle() {
//     let result1 = await Promise.allSettled([
//         Promise.reject("Bye"),
//         Promise.resolve("Hello"),

//     ])
//     console.log(result1)
// }
// promiseAllsettle()

//=======================================================

//4. Promise.any() => first resolve shortCircuit

async function PromiseAny(){
    let resultOne=await Promise.any([
        Promise.reject("Bye"),
        Promise.resolve("Hello"),
        Promise.reject(" All Bye"),
        Promise.resolve(" All Hello"),
    ])
    console.log(resultOne)
}
PromiseAny()





