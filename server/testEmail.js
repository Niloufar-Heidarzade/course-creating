// const sendEmail = require("./utils/sendEmail");

// async function test() {
//   try {
//     await sendEmail(
//       "testing", 
//       "this is my test text",
//       {address : "niiloufar.heidarzade@gmail.com" , name : "Niloufar Heidarzade"}
//     );

//     console.log("email sent!")
//   } catch (error) {
//     console.log(error)
//   }
// }

// test();

const sendEmail = require("./utils/sendEmail");

async function test() {
  try {
    await sendEmail("hniloufar8@gmail.com" , "testing" , "here is a test email to see if nodemailer is working right");
    console.log("email sent")
  } catch (error) {
    console.log(error)
  }
};

test();