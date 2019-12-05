const mailer = require("nodemailer");
const { Hello } = require("./Templates/hello_template");
const { Thanks } = require("./Templates/thanks_template");
const { Introduce } = require("./Templates/introduce_template");
const { PasswordCheck } = require("./Templates/passwordCheck_template");


const getEmailData = (to, name, template)  => {
  let data = null;

  switch (template) {
    case "hello":
      data = {
        from : `모카 클래스 <${process.env.EMAIL_ADRESS}>`,
        to,
        subject : `Hello ${name}`,
        html : Hello()
      }
      break;

    case "thanks":
      data = {
        from : `모카 클래스 <${process.env.EMAIL_ADRESS}>`,
        to,
        subject : `Thanks ${name}`,
        html : Thanks()
      }
      break;

      case "passwordCheck":
      data = {
        from : `모카 클래스 <${process.env.EMAIL_ADRESS}>`,
        to,
        subject : `Password Check ${name}`,
        html : PasswordCheck()
      }
      break;

      case "introduce":
      data = {
        from : `모카 클래스 <${process.env.EMAIL_ADRESS}>`,
        to,
        subject : `베타 서비스 실시 안내! ${name}`,
        html : Introduce()
      }
      break;

    default:
      data;
  }
  return data;
}




const sendEmail = (to, name, type)  => {
  const smtpTransport = mailer.createTransport({
    //service: "Gmail",  //Gmail 사용하느 경우 host 대신 사용
    host: process.env.EMAIL_HOST,  //자체 메일 도메인으로 발송 현재는 AWS 메일 서비스로 발송
    secure: true,  //true form 465, false for other ports
    port: 465,  // Gmail 의 경우 port 생략
    auth: {
      user: process.env.EMAIL_ADRESS,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false //로컬 호스트로 할때는 적어 줘야 하는것 같다.
    }
  })

  const mail = getEmailData(to, name, type)

  smtpTransport.sendMail(mail, function(error, response) {
    if(error) {
      console.log(error)
    } else {
      console.log("email sent successfully")
      console.log(`${mail.type} to ${mail.to}`)
    }
    smtpTransport.close();
  })

}

module.exports = { sendEmail }