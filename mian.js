//以下代码著作权归 朽木自雕 所有
//2022年12月23日
var mytempjson;var sum = []; var temp = 0; let Data = ""; var displaytext = "";
function inputFile(files) {
    if (files.length) {
        let file = files[0];
        let reader = new FileReader();
        reader.onload = function () {
            mytempjson = JSON.parse(this.result);
            mian(mytempjson);
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
    displaytext = document.getElementById("display-Text");
    displaytext.innerHTML = "导入成功！"
}
function button1() {
if (Data == "") {
    window.alert("您需要导入一个名单才能点哦！");
}else{
    displaytext.innerHTML = Data[sum[temp]].name;
    temp = temp + 1;
    if (temp > Data.length - 1) {
        mian(mytempjson);
        temp = 0;
    }
}
}
