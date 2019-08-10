if (!device.mobile()) {
    var tidio = document.createElement("script");
    tidio.src = "//code.tidio.co/pgoq6wtidr0fdvwn42rxl0ys4cayzbez.js";
    document.body.appendChild(tidio);
    var zadarma = document.createElement("script");
    zadarma.type = "text/javascript";
    zadarma.innerHTML = "var ZCallbackWidgetLinkId='8a4fa8d7ce3c419a14330f13b613e135';var ZCallbackWidgetDomain='my.zadarma.com';(function(){var lt=document.createElement('script');lt.type='text/javascript';lt.charset='utf-8';lt.async=true;lt.src='https://'+ZCallbackWidgetDomain+'/callbackWidget/js/main.min.js';var sc=document.getElementsByTagName('script')[0];if (sc)sc.parentNode.insertBefore(lt,sc);else document.documentElement.firstChild.appendChild(lt);})();"
    document.body.appendChild(zadarma);
}
function calculate() {
    var strCount = document.getElementById("count").value.trim();
    var intCount = parseInt(Number(strCount), 10);
    var msgResult = "";
    if (strCount === "") {
        msgResult = "Ошибка: вы не указали количество помещений";
    } else if (!Number.isInteger(intCount) || intCount <= 0) {
        msgResult = "Ошибка: вы указали не положительное число";
    } else {
        var price = 20;
        if (intCount <= 50) {
            price = 30;
        } else if (intCount < 500) {
            price = 25;
        }
        var sumResult = intCount * price;
        var discount = 10;
        if (sumResult < 50000) {
            discount = 0;
        } else if (sumResult < 100000) {
            discount = 4;
        } else if (sumResult < 200000) {
            discount = 6;
        }
        sumResult = sumResult * (100 - discount) / 100;
        msgResult = "Стоимость: " + sumResult + " руб.";
    }
    document.getElementById("result").innerHTML = msgResult;
}
