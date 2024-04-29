import { startOfDay } from "date-fns";
import { JSEncrypt } from "jsencrypt";
document.querySelector("#app").innerHTML = startOfDay(new Date());

const fs = require("fs");

fs.readFile("password.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    // Process the text content here
    var pass = data.split("\n");
    var encrypted;
    for (let i = 0; i < pass.length; i++) {
      //   console.log(pass[i]);
      const value = encrypt(pass[i]);
      console.log(value);
      encrypted += value + "\\n";
    }

    // console.log(encrypted);
  }
});

function encrypt(plaintext) {
  var encrypt = new JSEncrypt();

  var publicKey = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAy1AvASP1r6YIXeuLH0j5
    CQsM+ZLrHDnIZ407mw76szq6+QMDspK65bp2ui8P9KvD0GAOTSpSUXY9qQHe3c/N
    3FNf7Abp1LjAKqniFO7PbFW8STBYmLfpAmcHxCxSu/E2nfW8Y2yCR+gxIa+RiI9f
    WO2JV2JrOS2SF/3/sxqNjfdX2/mHMC5yrpOjc/fMvzoI/83RD2EgLz3+y76ehPf9
    BpDS82pTljBveNXqhJbQmCvcqbs6bmi0ZKBkfcDFFQas4ZO6WgSuT/YaTSIfjvyw
    u+oG+XpEi+UhsgJiqHqFXlAj5YUqzsUNy+ESVT4vMUQqil2OEJO8UL+XzGs354SA
    KwIDAQAB
    -----END PUBLIC KEY-----`;
  encrypt.setPublicKey(publicKey);
  return encrypt.encrypt(plaintext);
}

document.querySelector("#app").innerHTML = Date();
