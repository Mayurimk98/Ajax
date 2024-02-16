//Ajax => Asynchronous javascript

//synch js
//line by line
//Program 1
// function add1(){
//     console.log('I am add one function')
// }

// function add2(){
//     console.log('I am add two function')
// }

// add2()
// add1()

//I am add two function
//I am add one function

//web page

//synch => asynch
//==================================
//Program 2
//setTimeout

//synch => asynch
// function add3() {
//     setTimeout(function () {
//         console.log('I am add 3 funcrion')
//     }, 5000)
// }
// function add4(){
//     console.log("I am add 4 function")
// }

// add3()
// add4()

//I am add 4 function
//5 sec
//I am add 3 function

//=====================================================

//sych => asych

//Scenario
//MultipleUser => getId => showInfo

// function getInfo() {
//     setTimeout(function () {
//         console.log('Get Multiple User')
//     }, 3000)

//     setTimeout(function () {
//         console.log('Get one user ID')
//     }, 2000)

//     setTimeout(function () {
//         console.log('show single user info')
//     }, 1000)
// }

// getInfo()
//1 sec
//show single user info
//2 sec
//Get one user info
//3 sec
//Get multiple user


//synch => asych => synch

//=========================================================================

//asych => synch
//CallBack hell

//MultipleUser => getId => showInfo

// function getUserInfo() {
//     setTimeout(function () {
//         console.log('Get Multiple User')

//         setTimeout(function () {
//             console.log('Get one user id')

//             setTimeout(function () {
//                 console.log('Show user info')
//             }, 1000)
//         }, 2000)       
//     }, 4000)
// }
// getUserInfo() 

//readability
//tightly couple


//===========================================================================
//Promises

//Es6 => 2015


//Promises => reject , resolve, pending

let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10

    if (a == b) {
        resolve("hello")
    }
    else {
        reject("Bye")
    }
})
//consumed

pro.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})










