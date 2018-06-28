//    1. Сделать чтобы код выше - обрабатывал успешные промисы в случае если один из них rejected
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
     reject(5);
    }, 1000)
   }).catch( (err) => err)
   
   let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
     resolve(2);
    }, 3000)
   }).catch( (err) => err)
   
   Promise.all([p1, p2]).then(function (res) {console.log(res)});


   //2 вариант обработка массива в Promise.all
//    let p1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//      reject(5);
//     }, 1000)
//    })
   
//    let p2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//      resolve(2);
//     }, 3000)
//    })

  // Promise.all([p1, p2].map(p => p.catch( (err) => err)) ).then(function (res) {console.log(res)});

