const express = require("express");
const app = express();

// Nodemailer - For sending emails
const nodemailer = require("nodemailer");
const creds = require("./config/config");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 5000;

// Init Middleware
app.use(express.json({ extended: false }));


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// app.get("/" , (req,res) => res.send("API running"));

app.use(
  cors({
    credentials: true,
    origin: [`http://localhost:${port}`],
  })
);

var transport = {
  host: "smtp.outlook.com",
  auth : {
    user : creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((err, success) => {
  if(err) {
    console.log(err);
  } else {
    console.log("Success, up and running!");
  }
});


app.post('/contact', (req, res , next) => {
  const name = req.body.name;
  const email = req.body.email;
  const company = req.body.company;
  const message = req.body.message;

  var receiver = "jr_lewis@outlook.com"

  var mail = {
    from : name,
    to : receiver,
    subject : "Contact Form Request",
    message : message 
  }

  transporter.sendMail(mail , (err ,data) => {
    if(err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })

})


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});

app.listen(port, () => console.log(`Server started on port ${port}`));