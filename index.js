import inquirer from "inquirer";
import qr from "qr-image";
import fs, { writeFile } from "fs";


inquirer
  .prompt([
    //the message and name that we have writte are objects in js
    //so we will have to encase them in curly braces
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt",url, (err) =>{
      if(err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
