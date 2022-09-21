// (fetch("https://jsonplaceholder.typicode.com/users/1"))

// 1. Then

// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })



// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//     return response.json()
// })

// .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email
    
// })

// 2. Async/Await
// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data)
//     emailRef.innerHTML = data.email
// }

// main()



// // async/await
// async function main() {
//     const status = (await getSubscriptionStatus())
//     statusRef.innerHTML = status
// }

// main();

// // then

// // getSubscriptionStatus().then(response => console.log(response))

const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video")

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP")
        }, 2000);
    })
}
function getVideo(subscriptionStatus) {
    return new Promise((resolve,reject) => {
       if (subscriptionStatus === "VIP") {
        resolve("show video")
    } 
       else if (subscriptionStatus === "FREE") {
        resolve("show trailer")
       }
       else  {
        reject("no video")
       }
    })
}



 async function main() {
     const status = await getSubscriptionStatus();
     statusRef.innerHTML = status
     try {
     console.log(await getVideo(status))
     }
     catch (e) {
        console.log(e)
        videoRef.innerHTML = e;
     }
 }

main();
