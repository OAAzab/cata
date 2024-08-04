
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
            a.download = "convertedbycata.webp", a.href = e.toDataURL("image/webp", .75), a.click()
        }
    }, t.readAsDataURL(e)
}



function converttoJPG() {
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

function converttoAVIF() {
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

const textarea = document.querySelector("textarea"),
    fileNameInput = document.querySelector(".file-name input"),
    selectMenu = document.querySelector(".save-as select"),
    saveBtn = document.querySelector(".save-btn");



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

    if(error) {
        console.error();
        
    }
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




document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 400, 3000);
    counter("count2", 100, 50, 2500);
    counter("count3", 0, 40, 3000);
   });
   