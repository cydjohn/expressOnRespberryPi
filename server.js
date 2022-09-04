const express = require('express')
var exec = require('child_process').exec
const app = express()
const port = 5001

app.get('/onoff', (req, res) => {
    exec("irsend SEND_ONCE aircon on", function (error, stdout, stderr) {
        if (! error) { 
            res.send(stdout);
        } else { // things failed :(
            console.error("error unable to turn on");
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
