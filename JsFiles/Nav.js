document.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.id === "home") {
        var iframe = document.getElementById("myIframe");
        iframe.src = "./nav/home.html";
    }
    if (event.target.id === "function") {
        var iframe = document.getElementById("myIframe");
        iframe.src = "./nav/function.html";
    }
    if (event.target.id === "create") {
        var iframe = document.getElementById("myIframe");
        iframe.src = "./nav/create.html";
    }
    if (event.target.id === "help") {
        var iframe = document.getElementById("myIframe");
        iframe.src = "./nav/help.html";
    }
}
);