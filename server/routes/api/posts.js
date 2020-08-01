const express = require('express')
const firebase = require('./firebase')
const { route } = require('../../../../../Projects/ZARKACADEMY/ZarkAcademy MYWORK/server/routes/api/posts')
const db = firebase.firestore()

const router = express.Router()

//Get Post
router.get('/', async (req, res) => {
    const postsSnapshot = await db.collection('posts').get()
    const posts = []

    postsSnapshot.forEach((doc) => {
        posts.push({
            id: doc.id,
            content: doc.data().content,
            createdAt: doc.data().createdAt
        })
    })

    res.send(await posts)
})

//Add Post
router.post('/', async (req, res) => {
    const posts = await db.collection('posts')
    await posts.add({
        content: req.body.content,
        createdAt: new Date()
    })

    res.status(201).send()
})


//Delete Post
router.delete('/:id', async (req, res) => {
    const posts = await db.collection('posts').doc(req.params.id).delete();
    res.status(200).send();
})


module.exports = router