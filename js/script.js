if (device.mobile()) {
    document.getElementById("css").href = "css/mobile.css";
}
var setVisibility = function (elementName, isVisible) {
    var currentElement = document.querySelector("." + elementName + "-container");
    if (isVisible) {
        currentElement.style.display = "inline";
        setTimeout(function () {
            currentElement.style.opacity = 1;
            currentElement.style.visibility = "visible";
        }, 20);
        if (!device.mobile()) {
            document.querySelector(".content-container").style.height = currentElement.offsetHeight + "px";
        }
    } else {
        currentElement.style.display = "none";
        setTimeout(function () {
            currentElement.style.opacity = 0;
            currentElement.style.visibility = "hidden";
        }, 20);
    }
};
var articlesName = "articles";
var articlesArray = ["meeting", "tszh", "uk", "services"];
var redirectPage = function (pageId) {
    var aCurrentLast = document.querySelector(".a-current");
    aCurrentLast.classList.remove("a-current");
    setVisibility(aCurrentLast.id, false);
    if (aCurrentLast.id === articlesName) {
        for (i = 0; i < articlesArray.length; i++) {
            setVisibility(articlesArray[i], false);
        }
    }
    document.getElementById((articlesArray.indexOf(pageId) > -1) ? articlesName : pageId).classList.add("a-current");
    setVisibility(pageId, true);
};
var inputs = document.getElementsByTagName("a");
for (i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute("id")) {
        inputs[i].addEventListener("click", function (evt) {
            evt.preventDefault();
            history.pushState(null, "", evt.target.href);
            redirectPage(this.id);
        }, false);
    }
}
var setCurrentPage = function () {
    var currentHrefId = window.location.href.split("/")[window.location.href.split("/").length - 1];
    if (currentHrefId === "") {
        currentHrefId = "main";
    }
    redirectPage(currentHrefId);
    if (!device.mobile()) {
        document.querySelector(".content-container").style.height = document.querySelector("." + currentHrefId + "-container").offsetHeight + "px";
    }
};
window.onpopstate = function () {
    setCurrentPage();
};
setCurrentPage();
