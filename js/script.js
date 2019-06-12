if (device.mobile()) {
    document.getElementById("css").href = "css/mobile.css";
}
document.querySelector(".content-container").style.height = document.querySelector(".main-container").offsetHeight + "px";
var setVisibility = function (elementName, isVisible) {
    var currentElement = document.querySelector("." + elementName + "-container");
    if (isVisible) {
        currentElement.style.display = "inline";
        setTimeout(function () {
            currentElement.style.opacity = 1;
            currentElement.style.visibility = "visible";
        }, 20);
        document.querySelector(".content-container").style.height = currentElement.offsetHeight + "px";
    } else {
        currentElement.style.display = "none";
        setTimeout(function () {
            currentElement.style.opacity = 0;
            currentElement.style.visibility = "hidden";
        }, 20);
    }
};
var inputs = document.querySelectorAll("a");
for (i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute("id")) {
        inputs[i].addEventListener("click", function () {
            var aCurrentLast = document.querySelector(".a-current");
            aCurrentLast.classList.remove("a-current");
            setVisibility(aCurrentLast.id, false);
            document.getElementById(this.id).classList.add("a-current");
            setVisibility(this.id, true);
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }, false);
    }
}
