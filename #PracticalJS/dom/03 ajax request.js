var loadPosts = document.querySelector("#btn-click-me");
var box = document.querySelector("#box");
var ulist = document.createElement("ul");

loadPosts.addEventListener("click", () => {
    var request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    request.send();

    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            var data = JSON.parse(request.responseText);
            data.forEach((element,index) => {
                var listi = document.createElement("li");
                listi.innerHTML = index + ": " + element.title;
                ulist.appendChild(listi);
            });
            ulist.style.textAlign = "left";
            ulist.style.marginTop = "10px";
            box.insertAdjacentElement("beforeend", ulist);
        }
    }
})