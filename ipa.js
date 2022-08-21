const charsobj = [];
const buttonsArray = [];

const input = document.getElementById("input");
const buttons = document.getElementById("buttons");

var array = [];
var alt = false;
const BUTTON_TIME = 200;

function init() {
    for(var char of chars) {
        if(char.code == null) {
            char.code = char.char;
        }
        if(!("key" in char)) {
            char.key = char.char;
        }
        if(char.key.indexOf("$") == 0) {
            char.key = char.key.substring(1, char.key.length);
            char.alt = true;
        } else {
            char.alt = false;
        }
        charsobj.push(char);
    }
    for(var char of charsobj) {
        if("button" in char && !char.button) {
            delete char.button;
            continue;
        }

        var button = document.createElement("button");
        button.className = "button";
        button.innerHTML = char.code;
        
        button.setAttribute("onclick", `writeChar('${char.code}');`);
        buttons.appendChild(button);
        buttonsArray.push(button);
    }

    input.onmousedown = function(event) {
        if(event.button == 0 && input.value.length != 0) {
            navigator.clipboard.writeText(input.value);
        }
    }
    initKeyboard();
}

function writeChar(char) {
    array.push(char);
    setInputText();
}
function removeChar() {
    array.splice(array.length - 1, 1);
    setInputText();
}
function setInputText() {
    var text = "";
    for(var ch of array) {
        text += getChar(ch);
    }
    input.value = text;

    input.style.cursor = (text.length == 0) ? "text" : "pointer";
}
function getChar(code) {
    var obj = charsobj.find(function(obj) {
        return obj.code == code;
    });
    return obj.char;
}
function getButton(char) {
    return buttonsArray.find(function(button) {
        return button.innerHTML == char;
    });
}

function initKeyboard() {
    document.onkeydown = function(event) {
        if(event.key == "Alt") {
            alt = true;
            return;
        }
        if(event.key == " " && input.value.length != 0) {
            writeChar(" ");
            return;
        }

        if(event.key == "Backspace") {
            removeChar();
        }
        for(var obj of charsobj) {
            if(alt && !obj.alt) continue;

            if(event.key == obj.key) {
                var button = getButton(obj.char);
                if(button) {
                    button.classList.add("active");

                    setTimeout(function() {
                        button.classList.remove("active");
                    }, BUTTON_TIME);
                }
                writeChar(obj.code);
                break;
            }
        }
    }
    document.onkeyup = function(event) {
        if(event.key == "Alt") {
            alt = false;
        }
    }
}