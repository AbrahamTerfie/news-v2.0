import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyABj4BzsW3fHiI2QXfOGLuTPTH9YLxOrQM",
    authDomain: "news-full-6f57d.firebaseapp.com",
    databaseURL: "https://news-full-6f57d.firebaseio.com",
    projectId: "news-full-6f57d",
    storageBucket: "news-full-6f57d.appspot.com",
    messagingSenderId: "827475922432",
    appId: "1:827475922432:web:f3d99281e02997b54c52e5",
    measurementId: "G-9SBE579ZGK"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}


export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}