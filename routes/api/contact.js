const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const config = require("./config/user");
const cors = require("cors");

const port = process.env.PORT || 5000;

// Init Middleware
router.use(express.json({ extended: false }));
router.use(bodyParser.urlencoded({ extended: true }));
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
router.use(
  cors({
    credentials: true,
    origin: [`http://localhost:${port}`],
  })
);

var transport = {
  host: "smtp-mail.outlook.com", // Don’t forget to replace with the SMTP host of your provider
  port: 587,
  secure: "false",
  auth: {
    user: config.USER,
    pass: config.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var company = req.body.company;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message}`;

  var mail = {
    from: config.USER,
    to: "jr_lewis@outlook.com", // Change to email address that you want to receive messages on
    subject: "Query from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });

      transporter.sendMail(
        {
          from: config.USER,
          to: email,
          subject: "We've recieved your message",
          text: `Thank you for contacting us, a member of our team will contact you shortly.\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Message sent: " + info.response);
          }
        }
      );
    }
  });
});


module.exports = router;