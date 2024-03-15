function create() {
    var returnA=document.getElementById("return-text-p");
    returnA.innerHTML="你需要在你的设备上新建一个文本，将转换结果复制到新建的文本里，将文件后缀改为json<br>即可返回导入名单。"
    var print = document.getElementById("print");var text = document.getElementById("val").value;var lines = text.split("\n");
    let objectsArray = lines.map(line => {
        return { "name": line };
    });
    var endvalue = objectsArray;
    print.value=JSON.stringify(endvalue);
}