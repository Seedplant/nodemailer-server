## nodemailer 만들기

1. 간단한 node express 서버를 만들어 nodemailer 를 활용해 메일링 서버를 만든다.

2. 메일을 입력하면 해당 메일로 환영 메일이 날아올 수 있도록 간단한 클라이언트 페이지를 create-react-app로 만든다.

3. nodemailer 메일 발송 서비스로 gmail 을 사용한다.

4. 본인 gmail 계정 아이디와 비밀번호를 코드에 사용

5. 본 노드 서버는 http로 만들어져서 gmail 이 보안상 거부하는데 
   https://myaccount.google.com/lesssecureapps 를 통해 사용 가능으로 풀어주면 nodemailer 메일 발송이 가능해진다.

6. aws 는 https://blog.rajephon.dev/2018/10/06/Amazon-SES-Setup-00/ 참고