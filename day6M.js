//Asynch => Synch

//Call Back hell

// function getSingleUser() {
//     setTimeout(function () {
//         console.log("Users created")

//         setTimeout(function () {
//             console.log("Get Id")

//             setTimeout(function(){
//                 console.log("Show User")

//             },500)

//         }, 3000)

//     }, 2000)
// }

// getSingleUser()


//Promise

// function createUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("user Created")
//         }, 3000)
//     })
// }

// function getId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Get ID")
//         }, 4000)
//     })
// }

// function showUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Show User")
//         }, 2000)
//     })
// }

// // createUser()
// // .then(function(result){
// //     console.log(result)
// //     return getId()
// // })
// // .then(function(result){
// //     console.log(result)
// //     return showUser()
// // })
// // .then(function(result){
// //     console.log(result)
// // })
// // .catch(function(){
// //     console.log("Rejected")
// // })
// // .finally(function(){
// //     console.log("Always")
// // })

// //=========================================

// // asynch await


// async function getSingleUserResult() {
//     let p1 = await createUser()
//     console.log(p1)
//     let p2 = await getId()
//     console.log(p2)
//     let p3 = await showUser()
//     console.log(p3)
// }
// getSingleUserResult()

//=============================================================================

let users = {
    "page": 1,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

// users.data.forEach(function (el) {
//     //console.log(el)

//     document.write(`<h1>${el.first_name}</h1>`)
//     document.write(`<h1>${el.last_name}</h1>`)
//     document.write(`<h1>${el.id}</h1>`)
//     document.write(`<h1>${el.email}</h1>`)
//     document.write(`<img src=${el.avatar}>`)
// })
let button = document.querySelector('button')
button.addEventListener('click', function () {
    users.data.forEach(function (el) {
        //console.log(el)

        document.write(`<h1>${el.first_name}</h1>`)
        document.write(`<h1>${el.last_name}</h1>`)
        document.write(`<h1>${el.id}</h1>`)
        document.write(`<h1>${el.email}</h1>`)
        document.write(`<img src=${el.avatar}>`)
    })
})

