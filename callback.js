const prompt = require('prompt-sync')({sigint: true});

function checkcredentials(usnm,pswd) {
    return usnm === "deedee" && pswd === "12345";
}

function CheckWithMsg(clbk,msg){
    let uname = prompt("Username: ");
    let pswd = prompt("Password: ");
    const result = clbk(uname,pswd);
    const fresult="Hi " + msg + "Your credentials are: " + result;
    console.log(fresult);
}
CheckWithMsg(checkcredentials, "Mr.Deep ");