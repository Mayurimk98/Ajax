//AJAX => asynch


//synch code

// function add1(){
//     console.log("Add 1 calling")
// }

// function add2(){
//     console.log("Add 2 function")
// }

// add2()
// add1()
//Add 2 calling
//Add 1 calling

//synch => asynch


// function add3() {
//     setTimeout(function () {
//         console.log("Add 3 calling")
//     }, 3000)
// }

// function add4(){
//     console.log("Add 4 calling")
// }

// add3()
// add4()

// //Add 4 calling
// //3 sec
// //Add 3 calling

//user create => get id => show info => asynch

// function getUserInfo() {
//     setTimeout(function () {
//         console.log("User Created")
//     }, 4000)

//     setTimeout(function () {
//         console.log("Get Id")
//     }, 3000)

//     setTimeout(function () {
//         console.log("show Info")
//     }, 2000)
// }
// getUserInfo()

//2 sec
//show Info
//3 Sec
//Get ID
//4 Sec
//User Created

//Asynch => Synch
//Call Back hell


// function getUserInfo() {
//     setTimeout(function () {
//         console.log("User Created")

//         setTimeout(function () {
//             console.log("Get id")

//             setTimeout(function () {
//                 console.log("Show User")

//             }, 2000)

//         }, 3000)

//     }, 4000)
// }

// getUserInfo()

//=======================================================
//Promises

//resolve, reject , pending

// let pro = new Promise(function (resolve, reject) {
//     let a = 20
//     let b = 20

//     if (a == b) {
//         resolve("Hello ALL")
//     }
//     else {
//         reject("Bye ALL")
//     }
// })

// //Consume => .then()

// pro.then(function (str) {
//     console.log(str)//Hello ALL

// }, function (str) {
//     console.log(str) //Bye ALL

// })

//==================================================


// let pro = new Promise(function (resolve, reject) {
//     let a = 20
//     let b = 200

//     if (a == b) {
//         resolve([66,88,99,120])
//     }
//     else {
//         reject([-99,-788,-234,-876])
//     }
// })

// //Consume => .then()

// pro.then(function (str) {
//     console.log(str[3])//120

// }, function (str) {
//     console.log(str[1]) 

// })

//=========================================================

// let pro = new Promise(function (resolve, reject) {
//     let a = 20
//     let b = 210

//     if (a == b) {
//         resolve("Hello ALL")
//     }
//     else {
//         reject("Bye ALL")
//     }
// })

// //Consume => .then()

// pro
//     .then(function (str) {
//         console.log(str)

//     })
//     .catch(function (str) {
//         console.log(str)
//     })

//=====================================================

// let pro = new Promise(function (resolve, reject) {
//     let a = 20
//     let b = 20

//     if (a == b) {
//         resolve("Hello ALL")
//     }
//     else {
//         reject("Bye ALL")
//     }
// })

// //Consume => .then()

// pro
//     .then(function (str) {
//         console.log(str)

//     })
//     .catch(function (str) {
//         console.log(str)
//     })
//     .finally(function(){
//         console.log('Always execute')
//     })

//=============================================================

let pro1 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10

    if (a == b) {
        resolve("Hello")
    }
    else {
        reject("bye")
    }
})
pro1.then(function (str) {
    console.log(str) //Hello
    return str+"Mayuri"
})
.then(function(str){
    console.log(str) //Hello Mayuri
    return "Hello Minskole"
})
.then(function(str){
    console.log(str) //hello Minksole
})
.catch(function(str){
    console.log(str)
})
    






