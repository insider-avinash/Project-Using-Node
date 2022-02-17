const express = require('express');

const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

// MiddleWare
app.use(express.static('public'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/contcat.html')
})

app.post('/', (req,res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'testavinash2001@gmail.com',
            pass: 'Avinash@123'
        }
    })

    const mailOption = {
        from: req.body.email,
        to: "testavinash2001@gmail.com",
        subject: `Message from ${req.body.email}: New Query Submission`,
        name: `Name: ${req.body.userName}`,
        text: req.body.message
    }
    transporter.sendMail(mailOption,(error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log("Email send: "+ info.response);
            res.send('success');
        }
    });
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})