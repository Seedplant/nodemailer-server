const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();


const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());


const { sendEmail } = require('./mail');

app.post("/api/sendMail", (req, res) => {
  console.log(req.body)

  sendEmail(req.body.email, req.body.name, "happyNewYear")
})


//csv to json
//const csvFilePath='./EmailListTeacher01.csv'
const csvFilePath='./test.csv'
const csv=require('csvtojson')

//강사분들 이메일csv 파일 읽어 들여서 json파일로 변환 후 Array 생성
async function csvToJson() {

  let teacherArray = []
  const jsonArray = await csv().fromFile(csvFilePath);

  for (let i = 0; i < jsonArray.length; i++) {
    
    setTimeout(function() {
      teacherArray.push(jsonArray[i].classTeacher);
      console.log(i)
      console.log('['+jsonArray[i].classTeacher+']')
      sendEmail(jsonArray[i].classTeacher, 'hi', "happyNewYear")
    }, i*4000);
    //sendEmail(jsonArray[i].classTeacher, 'hi', "happyNewYear")
  }
  //console.log('['+teacherArray+']')
}

csvToJson();



app.listen(5000, () => {
  console.log("Server Running at 5000")
})