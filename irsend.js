// For lirc use
// sudo apt install lirc
// irsend SEND_ONCE aircon on
app.get('/onoff', (req, res) => {
    exec("irsend SEND_ONCE aircon on", function (error, stdout, stderr) {
        if (! error) {
            res.send(stdout);
        } else { // things failed :(
            console.error("error unable to turn on");
        }
    });
});
