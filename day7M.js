
// function showInfo() {
//     fetch("https://reqres.in/api/users?page=2")
//         .then(function (res) {
//             // console.log(res)//output not in readable format
//             // console.log(res.json()) //promise pending
//             return res.json()
//         })
//         .then(function (response) {
//             //console.log(response)
//             //console.log(response.data) 
//             response.data.forEach(function (el) {
//                 document.write(`<h1>${el.first_name}</h1>`)
//                 document.write(`<h1>${el.last_name}</h1>`)
//                 document.write(`<h1>${el.id}</h1>`)
//                 document.write(`<h1>${el.email}</h1>`)
//                 document.write(`<img src=${el.avatar}>`)
//             })
//         })

// }

// //showInfo()

// let button=document.querySelector("button")
// button.addEventListener('click',function(){
//     showInfo()
// })

//=========================================================

//GetUser => getID=> showUser

//Promises

function getListUsers(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            //console.log(res)
            return res.json()
        })
        .then(function (res) {
            return (res.data)
        })

}

function singleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            return (res.data)
        })
}


function showUser(user) {
    document.write(`<h1>${user.first_name}</h1>`)
    document.write(`<h1>${user.last_name}</h1>`)
    document.write(`<h1>${user.id}</h1>`)
    document.write(`<h1>${user.email}</h1>`)
    document.write(`<img src=${user.avatar}>`)

}

getListUsers(2)
.then(function(res){
// console.log (res[1].id)
return singleUser(res[1].id)
})
.then(function(res){
    //console.log(res)
    showUser(res)
})









//singleUser(4)
















//getListUsers(2)