if (!device.mobile()) {
    document.getElementsByTagName("html")[0].style.margin = "0px 43px 63px 17px";
    document.getElementsByTagName("body")[0].style.textAlign = "justify";

    var table = document.getElementsByTagName("table");
    for (var i = 0; i < table.length; i++) {
        table[i].style.fontSize = "1em";
        table[i].style.marginBottom = "8px";
    }

    var td = document.getElementsByTagName("td");
    for (var i = 0; i < td.length; i++) {
        td[i].style.verticalAlign = "middle";
    }

    var headLeft = document.getElementsByClassName("head-left")[0];
    if (headLeft) {
        headLeft.style.float = "left";
        headLeft.style.width = "28%";
    }

    var headRight = document.getElementsByClassName("head-right")[0];
    if (headRight) {
        headRight.style.float = "left";
        headRight.style.width = "72%";
    }

    var articleContainer = document.getElementsByClassName("article-container")[0];
    if (articleContainer) {
        articleContainer.style.padding = "0px 150px";
    }

    var footer = document.getElementsByClassName("footer")[0];
    if (footer) {
        footer.style.fontSize = "1.2em";
    }
}
