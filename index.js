const express = require('express') //익스프레스 모듈을 가져온다.
const app = express() // 펑션을 이용해서 새로운 익스프레스 앱을 만든다
const port = 5000 //포트는 상관이 없다.


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yoona3827:21261dbs!!@cluster0.2dpkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log("MongoDB Connected"))
    .catch(err=>console.log(err));

app.get('/', (req, res) => {
    res.send('안녕하세요!') //hello world를 출력되게 한다.
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//app 이 listen 되면 console.log가 찍힘