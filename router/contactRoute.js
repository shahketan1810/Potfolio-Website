const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res) => {
    let data = req.body;
    if(data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg: "Please fill all the fields"});
    }

    let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth:{
            user: 'shahketan1810@gmail.com',
            pass: 'password',
        }
    })

    let mailOptions = {
        form: data.email,
        to: 'shahketan1810@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
            <h3>Information</h3>
                <h4>Name: ${data.name}</h4>
                <h4>Email: ${data.email}</h4>
            <h3>Message</h3>
            <p>${data.message}</p>
        `
    };

    smtpTransporter.sendMail(mailOptions, (error) => {
        try{
            if(error){
                return res.status(400).json({msg: "Please fill all the fields"});
            }
            res.status(200).json({msg: "Thank you for contacting me!! 😀"})
        }
        catch (error){
            if(error){
                return res.status(500).json({msg: "There is a server error"});
            }
        }
    });
});

module.exports = router;