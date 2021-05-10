export default function (req, res) {
    let nodemailer = require('nodemailer')
    require('dotenv').config()
    const PASSWORD = process.env.password

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'dubaniagency@gmail.com',
          pass: 'Wedoprofan_14',
        },
        secure: true,
      })
      
      const mailData = {
        from: 'dubaniagency@gmail.com',
        to: 'wedoprofan14@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
        html: <div>{req.body.message}</div>
       }

       transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })

      res.status(200)

    console.log(req.body)
  }