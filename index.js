const express = require('express') //익스프레스 모듈을 가져온다.
const app = express() // 펑션을 이용해서 새로운 익스프레스 앱을 만든다
const port = 5000 //포트는 상관이 없다.
const {User} = require("./models/User")
const bodyParser = require('body-parser')
const config = require('./config/key')

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

const mongoose = require('mongoose')

mongoose.connect(config.mongoURI,{})
    .then(() => console.log("MongoDB Connected"))
    .catch(err=>console.log(err));

app.get('/', (req, res) => {
    res.send('안녕하세요! 안녕하십니까') //hello world를 출력되게 한다.
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//app 이 listen 되면 console.log가 찍힘

app.post('/register',(req,res)=>{
    //회원가입할때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err, userInfo)=>{
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })


})