const express = require('express');
const Enquiry = require('../models/Enquiry');
const nodemailer = require('nodemailer');
const Config = require('../models/Config')
const router = express.Router();
require('dotenv/config')


const transporter = nodemailer.createTransport({    
    host: "smtp.gmail.com",  
    service: 'gmail',
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers:'SSLv3'
    },
    requireTLS:true,
    port: 465,
    debug: true,
    auth: {
        type: "login", // default
        user: process.env.GODADDYEMAIL,
        pass: process.env.GODADDYPASSWORD
    }
});

router.post('/add-enquiry', (req, res) => {
   
   const add_enquiry = new Enquiry({
       "firstName": req.body.firstName,
       "lastName": req.body.lastName,
       "phoneNumber": req.body.phoneNumber,
       "address": req.body.address,
       "BookingDate": req.body.BookingDate,
       "is_public": req.body.is_public
    });
   add_enquiry.save().then(data => {
    Config.findOne({}, function(err, result) {
        res.status(200).json({'visitorCode': result.visitorCode});
    })
     
   })
   .catch(err => {
    console.log(err);
       res.status(503).json({'error': 'Internal Server Error'})
   })
})

router.get('/view-all-enquiry', (req, res) => {
    Enquiry.paginate({}, {page: Number(req.query.pageNo), limit: Number(req.query.pageSize), sort:     { timestamp: -1 }}, function(err, result){
        res.status(200).json({'success': result});
    })
    // Enquiry.find({}, function(err, result){
    //     res.status(200).json({'success': result});
    // })
})

router.post('/contact-us', (req, res) => {
    var mailOptions = {
        from: process.env.GODADDYEMAIL,
        to:  [req.body.email],
        bcc: [process.env.GODADDYEMAIL ],
        subject: `Maharaja Banquet Booking Query`,
        text: req.body.message,
        html: `<h1 style="color:orange;text-align:center">
                   Hi ${req.body.name}, Thank you for visiting Maharaja Banquet
                </h1>
                <hr>
                    <div>
                        <div style="font-weight:bold;color:green;text-decoration:underline;">Client Details</div>
                        <p>Name: ${req.body.name} <br>
                        Phone Number: ${req.body.phone} <br>
                        Message: ${req.body.message}
                        <p>
                    </div>
                        <hr>
                        <h3>Your Query hass been recieved</h3>
                        <hr>
                        <br>
                        <br>
                        <address>
                            <div style="font-weight:bold;font-size:15px;">Address:</div>
                            Pankaj Chowk,<br>
                            near Mawesi Hospital P.O<br>
                            Raxaul, Bihar 845305 <br>
                            contact number: +918970777693<br>
                            <a href="http://www.maharajaraxaul.com/">Visit Our Website</a>
                        </address>
                        `
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
            res.status(200).json({status:'ok'})

        }
      });
})


router.post('/validate-visitor-code', (req, res) => {
    Config.findOne({}, function(err, result) {

        if(result && result.visitorCode === req.body.visitorCode) {
            res.status(200).json({status: 'Visitor Code Verified'})
            return;
        } else {
            res.status(403).json({staus: 'Invalid Visitor Code'})
            return;

        }
    })
})

module.exports = router;