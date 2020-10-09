//{username:"admin",password:111}
/* function ajax(type, url, data, success) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    //将数据进行一下格式转换
    var str = "";
    for (var i in data) {
        str += i + "=" + data[i] + "&";
    }
    //拼接完成之后会在当前字符串后多出一个&符号，最好去掉
    str = str.replace(/&$/, "");

    if (type.toLowerCase() == "get") {
        if (str == "") {
            xhr.open("get", url);
        } else {
            xhr.open("get", url + "?" + str); //key1=val1&key2=val2
        }

        xhr.send();
    }
    if (type.toLowerCase() == "post") {
        xhr.open("post", url);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(str); //key1=val1&key2=val2
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var data = xhr.responseText;
                success(data);
            }
        }
    }
} */

function ajax(obj) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    //将数据进行一下格式转换
    var str = "";
    for (var i in obj.data) {
        str += i + "=" + obj.data[i] + "&";
    }
    //拼接完成之后会在当前字符串后多出一个&符号，最好去掉
    str = str.replace(/&$/, "");

    if (obj.type.toLowerCase() == "get") {
        if (str == "") {
            xhr.open("get", obj.url);
        } else {
            xhr.open("get", obj.url + "?" + str); //key1=val1&key2=val2
        }

        xhr.send();
    }
    if (obj.type.toLowerCase() == "post") {
        xhr.open("post", obj.url);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(str); //key1=val1&key2=val2
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var data = xhr.responseText;
                obj.success(data);
            }
        }
    }
}