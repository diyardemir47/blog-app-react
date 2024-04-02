import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCbiqrY432ILJMVUnTNNg7zdqDpnsBHUsg",
    authDomain: "react-blog-app-65127.firebaseapp.com",
    projectId: "react-blog-app-65127",
    databaseURL: "https://react-blog-app-65127-default-rtdb.firebaseio.com/", // Firebase Realtime Database URL'sini buraya ekleyin
    storageBucket: "react-blog-app-65127.appspot.com",
    messagingSenderId: "927897396458",
    appId: "1:927897396458:web:87b0d3a4a83e5e4cab6393",
    measurementId: "G-XMTHHH4Z60"
};

//BAĞLAMA İŞLEMİİİ
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
  
// Firebase Realtime Database'e veri ekleyin
// database.ref().set({
//     title: "blog başlığı 111",
//     description: "blog açıklaması 1",
//     author: {
//         name: "Sadık",
//         surname: "Turan"
//     } 
// }).then(() => {
//     console.log("Veri başarıyla veritabanına yazıldı.");
//     database.ref("tags").set(["angular","react"])
//     .then(()=>{
//         console.log("etiketler eklendi");
//     }).catch((e)=>{
//         console.log("hata",e)
//     })
//     database.ref("juices").set(["BANANA","ORANGE","APPLE","ANUT"])
//     .then(()=>{
//         console.log("meyveler eklendi ");
//     }).catch((e)=>{
//         console.log("meyveler eklenmedi",e)
//     })
// }).catch((error) => {
//     console.error("Veri yazılırken hata oluştu: ", error);
// });


// console.log("uygulama çalıştı");

//    // Güncelleme işlemi
//    database.ref().update({
//     title: "blogumuz yeanidir",
//     description: "YENİ AÇIKLAMAMIZ",
//     imageUrl:"adasda.pj",
//     'juices/0': "new value aaafor index 0",
//     'juices/1': "ORANGE",
//     'juices/2': "APPLE",
//     'juices/3': "ANUT"
// }).then(() => {
//     console.log("Veri başarıyla güncellendi.");
// }).catch((error) => {
//     console.error("Veri güncellenirken hata oluştu: ", error);
// });



//DİZİLER

// const blogs= {
//     101:{
//         id:"1",
//         title:"blog title 1"
//     },
//     102:{
//         id:"1",
//         title:"blog title 1"
//     },
//     103:{
//         id:"1",
//         title:"blog title 1"
//     },
//     104:{
//         id:"1",
//         title:"blog title 1"
//     },
// }


// const users= {
//   "diyar":  {
// name:"diyar",
// surname:"demir"
//     },
//     "ali":  {
//         name:"ali",
//         surname:"demir"
//             },

//             "serkan":  {
//                 name:"serkan",
//                 surname:"demir"
//                     },
// }

// database.ref().set( {
//     blogs:blogs,
//     users:users

    
// });

//dizide güncleeme 
// database.ref("blogs/104").set ({
//     id:"4",
//     title:"blog title 4"
// })

// database.ref("products").push({
//     name:"SAMSUNG 27",
//     price:4500,
//     isApproved:true
// });

// database.ref("products").push({
//     name:"XİAOMİ  MI7",
//     price:4500,
//     isApproved:true
// });

database.ref("products").once("value")
.then((snapshopt) => {
console.log(snapshopt.val());
})


//dizide veriye ulaşma 
// database.ref("blogs/102").once("value").then((snapshot) =>{

//     console.log(snapshot.val());
// })
//dizideki veriye ulaşmaaaa value değri ve snapshop kullanacak parametre araçalrıdır
// // database.ref("users/diyar").once("value").then((snapshot) =>{

// //     console.log(snapshot.val());
// // })

//diziye verli ekleme 
// database.ref("blogs").push({
// 105:{ id:"3",
//     title:"blog title 3",
// }
// })

//SORGU İŞLEMLERİ

// database.ref("author")
// .once("value")
// .then((snapshot)=>{
//     const blog=snapshot.val();
//     console.log(blog);
// })

// .catch((e)=>{
//     console.log("okumama hata:",e)
// })

//ON ile anlık olarak gelir

// database.ref("author").on("value",(snapshot)=> {
// //snapshop ile veriyi okuyourz
// const blog= snapshot.val();
// console.log(blog);
// });


// setTimeout(() => {
//     database.ref("title").set("updateded blog title");
//     console.log("title değişti");
// }, 3000);


// setTimeout(() => {
//     database.ref().off();
//     console.log("title değişti 2");
// }, 6000);


// setTimeout(() => {
//     database.ref("title").set("updateded blog title 3");
//     console.log("title değişti 3");
// }, 9000);



//silme işlemi


// // database.ref("description")
// // .remove()
// // .then(()=>{
// //     console.log("title silind")
// // }).catch((e)=>{
// //     console.log(e)
// // })

//  database.ref("juices[0]")
//  .remove()
//  .then(()=>{
//      console.log("title silind")
//  }).catch((e)=>{
//      console.log(e)
//  })


// database.ref().set("yeni kayıt");

// database.ref().set({
//     title:"blog title 1",
//     name:"diyar demirr"
// })

// database.ref("title").set("blog titleeeeee");
// database.ref("author").set({

//     name:"DİYAR",
//     surname:"DEMİR"
// })


// database.ref("author/name").set("ÇINAR");
// database.ref("tags").set(["react","javadasd","fasfasfaf"]);