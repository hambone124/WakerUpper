const express = require("express"),
  wol = require("node-wol"),
  app = express(),
  os = require("os"),
  fs = require("fs"),
  ip = os.networkInterfaces().eth0[0].address,
  macAddress = fs.readFileSync("mac", "utf8");

app.get("/wake", (req, res) => {
  wol.wake(`${macAddress}`, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const dateString = new Date().toLocaleString("en-US", {
        timeZone: "America/New_York"
      });
      console.log(`${dateString}: Magic packet sent to ${macAddress} from ${req.ip}`);
      res.send('WAKEY WAKEY');
    }
  });
});

app.listen(8080, ip, () => {
  console.log("WakerUpper started");
});