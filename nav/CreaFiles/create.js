
function create() {

    var print = document.getElementById("print");var text = document.getElementById("val").value;var lines = text.split("\n");
    let objectsArray = lines.map(line => {
        return { "name": line };
    });
    var endvalue = objectsArray;
    print.value=JSON.stringify(endvalue);
}
function createusa(){
    create();
}