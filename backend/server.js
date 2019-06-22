const express = require('express');

const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

const bodyParser = require('body-parser');
app.use(bodyParser());

const port = "4000";

var cors = require('cors');

app.use(cors());


app.post("/uploadImage", (req, res) => {
    console.log('hitting');
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.incomingImage;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('./file.jpg', function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

app.get('/health', () => {
    console.log('server up and running');
});


app.post('/logs', (req, res) => {
    console.log(req.body);
    res.send("ok");
});

app.listen(port, () => {
    console.log("Server runnning");
})