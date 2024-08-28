var mytempjson; var sum = []; var temp = 0; let Data = ""; var displaytext = ""; var reutrn = ""; var pmax = 0;

function inputFile(files) {
    if (files.length) {
        let file = files[0];
        let reader = new FileReader();
        reader.onload = function () {
            mytempjson = JSON.parse(this.result);
            mian(mytempjson);
            printtext = document.getElementById("print-text")
            reutrn = document.getElementById("reutrn-text");
            displaytext = document.getElementById("display-Text");
            let namesText = '';
            if (Data && Data.length) {
                namesText = Data.map(item => item.name).join('<br><br>');
                pmax = pmax + 1
            }
            reutrn.innerHTML = namesText;
            printtext.innerHTML = pmax;
        };
        reader.readAsText(file);
    }
}




function mian(json) {
    Data = json;
    myNum(Data.length, 0, Data.length - 1);
}
function selectFrom(min, max) {
    var sum = max - min + 1;
    return Math.floor(Math.random() * sum + min);
}
function myNum(n, min, max) {
    for (i = 0; i < n; i++) {
        sum[i] = selectFrom(min, max);
        for (z = 0; z < i; z++) {
            if (sum[i] == sum[z]) {
                i--;
                break;
            }
        }
    }
}
function button1() {
    reutrn = document.getElementById("reutrn-text")
    if (Data == "") {
        reutrn.innerHTML = "您需导入名单才能点名！你可以点击下方“创建名单”按钮来创建名单。";
    } else {
        displaytext.innerHTML = Data[sum[temp]].name;
        temp = temp + 1;
        if (temp > Data.length - 1) {
            mian(mytempjson);
            temp = 0;
        }
    }
}
