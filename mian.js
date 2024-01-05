//以下代码著作权归 朽木自雕 所有
//2022年12月23日
var sum = []; var temp = 0; let Data = ""; var displaytext = "";
function inputFile(files) {
    if (files.length) {
        let file = files[0];
        let reader = new FileReader();
        reader.onload = function () {
            var mytempjson = JSON.parse(this.result);
            mian(mytempjson);
        };
        reader.readAsText(file);
    }
}
function mian(json) {
    Data = json;
    myNum(Data.length, 0, Data.length - 1);
    console.log("初始化中...");
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
    console.log("初始化完毕。");
}
function button1() {
    displaytext.innerHTML = Data[sum[temp]].name;
    temp = temp + 1;
    if (temp > Data.length - 1) {
        console.log("点名已结束，准备重新初始化数据。");
        mian();
        temp = 0;
    }
}
