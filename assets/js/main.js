function converttoJpeg() {
    if (!document.getElementById("input").files[0]) return alert("Please select an image first.");
    var e = document.getElementById("input").files[0],
        t = new FileReader;
    t.onload = function(e) {
        var t = new Image;
        t.src = e.target.result, t.onload = function() {
            var e = document.createElement("canvas");
            e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0);
            var a = document.createElement("a");
            a.download = "convertedbycata.jpeg", a.href = e.toDataURL("image/jpeg", .75), a.click()
        }
    }, t.readAsDataURL(e)
}

function converttopng() {
    if (!document.getElementById("input").files[0]) return alert("Please select an image first.");
    var e = document.getElementById("input").files[0],
        t = new FileReader;
    t.onload = function(e) {
        var t = new Image;
        t.src = e.target.result, t.onload = function() {
            var e = document.createElement("canvas");
            e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0);
            var a = document.createElement("a");
            a.download = "convertedbycata.png", a.href = e.toDataURL("image/png", .75), a.click()
        }
    }, t.readAsDataURL(e)
}

function converttowebp() {
    if (!document.getElementById("input").files[0]) return alert("Please select an image first.");
    var e = document.getElementById("input").files[0],
        t = new FileReader;
    t.onload = function(e) {
        var t = new Image;
        t.src = e.target.result, t.onload = function() {
            var e = document.createElement("canvas");
            e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0);
            var a = document.createElement("a");
            a.download = "convertedbycata.html", a.href = e.toDataURL("image/webp", .75), a.click()
        }
    }, t.readAsDataURL(e)
}

function converttoJpg() {
    if (!document.getElementById("input").files[0]) return alert("Please select an image first.");
    var e = document.getElementById("input").files[0],
        t = new FileReader;
    t.onload = function(e) {
        var t = new Image;
        t.src = e.target.result, t.onload = function() {
            var e = document.createElement("canvas");
            e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0);
            var a = document.createElement("a");
            a.download = "convertedbycata.jpg", a.href = e.toDataURL("image/jpg", .75), a.click()
        }
    }, t.readAsDataURL(e)
}

function converttoAvif() {
    if (!document.getElementById("input").files[0]) return alert("Please select an image first.");
    var e = document.getElementById("input").files[0],
        t = new FileReader;
    t.onload = function(e) {
        var t = new Image;
        t.src = e.target.result, t.onload = function() {
            var e = document.createElement("canvas");
            e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0);
            var a = document.createElement("a");
            a.download = "convertedbycata.avif", a.href = e.toDataURL("image/avif", .75), a.click()
        }
    }, t.readAsDataURL(e)
}

function converttoTIFF() {
    if (!document.getElementById("input").files[0]) return alert("Please select an image first.");
    var e = document.getElementById("input").files[0],
        t = new FileReader;
    t.onload = function(e) {
        var t = new Image;
        t.src = e.target.result, t.onload = function() {
            var e = document.createElement("canvas");
            e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0);
            var a = document.createElement("a");
            a.download = "convertedbycata.tiff", a.href = e.toDataURL("image/tiff", .75), a.click()
        }
    }, t.readAsDataURL(e)
}

function converttoRAW() {
    if (!document.getElementById("input").files[0]) return alert("Please select an image first.");
    var e = document.getElementById("input").files[0],
        t = new FileReader;
    t.onload = function(e) {
        var t = new Image;
        t.src = e.target.result, t.onload = function() {
            var e = document.createElement("canvas");
            e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0);
            var a = document.createElement("a");
            a.download = "convertedbycata.raw", a.href = e.toDataURL("image/raw", .75), a.click()
        }
    }, t.readAsDataURL(e)
}
const textarea = document.querySelector("textarea"),
    fileNameInput = document.querySelector(".file-name input"),
    selectMenu = document.querySelector(".save-as select"),
    saveBtn = document.querySelector(".save-btn");

function converttoPDF() {
    if (!document.getElementById("input").files[0]) return alert("Please select an image first.");
    var e = document.getElementById("input").files[0],
        t = new FileReader;
    t.onload = function(e) {
        var t = new Image;
        t.src = e.target.result, t.onload = function() {
            var e = document.createElement("canvas");
            e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0);
            var a = document.createElement("a");
            a.download = "convertedbycata.pdf", a.href = e.toDataURL("image/pdf", .75), a.click()
        }
    }, t.readAsDataURL(e)
}

function converttoBMP() {
    if (!document.getElementById("input").files[0]) return alert("Please select an image first.");
    var e = document.getElementById("input").files[0],
        t = new FileReader;
    t.onload = function(e) {
        var t = new Image;
        t.src = e.target.result, t.onload = function() {
            var e = document.createElement("canvas");
            e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0);
            var a = document.createElement("a");
            a.download = "convertedbycata.bmp", a.href = e.toDataURL("image/bmp", .75), a.click()
        }
    }, t.readAsDataURL(e)
}

function converttoPNG() {
    if (!document.getElementById("input").files[0]) return alert("Please selcet an image first.");
    var e = document.getElementById("input").files[0],
        t = new FileReader;
    t.onload = function(e) {
        var t = new Image;
        t.src = e.target.result, t.onload = function() {
            var e = document.createElement("canvas");
            e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0);
            var a = document.createElement("a");
            a.download = "convertedbycata.png", a.href = e.toDataURL("image/png", .75), a.click()
        }
    }, t.readAsDataURL(e)
}
selectMenu.addEventListener("change", (() => {
    selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = "Convert"
})), saveBtn.addEventListener("click", (() => {
    const e = new Blob([textarea.value], {
            type: selectMenu.value
        }),
        t = URL.createObjectURL(e),
        a = document.createElement("a");
    a.download = fileNameInput.value, a.href = t, a.click()
}));
