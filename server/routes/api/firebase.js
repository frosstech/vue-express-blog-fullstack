const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyBxjHzVoxecFqWOlHNbVKqbUjZXSSpBLYY",
    authDomain: "vue-blog-51480.firebaseapp.com",
    databaseURL: "https://vue-blog-51480.firebaseio.com",
    projectId: "vue-blog-51480",
    storageBucket: "vue-blog-51480.appspot.com",
    messagingSenderId: "588352765766",
    appId: "1:588352765766:web:b789fbb5c9ce4047202f47",
    measurementId: "G-49HQK7X2Y2"
}

const fire = firebase.initializeApp(config)
module.exports = fire