//This is the code after I used Babel

"use strict";

var color = document.getElementById('color');
var background = document.querySelector('body');
var title = document.querySelector('h1');
var text = document.querySelector('h4');
var output = document.getElementById('output');
var pick = document.getElementById('pick');
var elected = document.getElementById('elected');
var close = document.createElement('i');
var bars = document.createElement('i');
bars.setAttribute('class', 'fa-solid fa-bars');
bars.style.position = 'absolute';
bars.style.right = '0';
bars.style.top = '0';
bars.style.margin = '20px';
bars.style.fontSize = '30px';
bars.style.zIndex = '10';
bars.style.display = 'none';
background.appendChild(bars);
color.addEventListener('input', function () {
  var value = color.value;
  background.style.backgroundColor = "".concat(value);
  output.style.backgroundColor = "#fff";
  output.style.color = "".concat(value);
  output.innerHTML = "".concat(value);
  output.style.border = "unset";
  pick.style.backgroundColor = '#fff';
  pick.style.color = "".concat(value);

  if (output.innerHTML.startsWith('#a') || output.innerHTML.startsWith('#b') || output.innerHTML.startsWith('#c') || output.innerHTML.startsWith('#d') || output.innerHTML.startsWith('#e') || output.innerHTML.startsWith('#f')) {
    output.style.backgroundColor = "black";
    title.style.color = "black";
    pick.style.backgroundColor = 'black';
    bars.style.color = 'black';
    text.style.color = 'black';
  } else {
    title.style.color = "white";
    bars.style.color = 'white';
    text.style.color = 'white';
  }
});
pick.addEventListener('click', chooseColor);

function chooseColor() {
  if (output.innerHTML != '' && elected.firstElementChild == null) {
    elected.style.display = 'flex';
    elected.style.flexWrap = 'wrap';
    elected.style.alignItems = 'space-around';
    elected.style.justifyContent = 'space-around';
    elected.style.backgroundColor = '#fffe';
    elected.style.transition = '1s linear';
    elected.style.right = '0';
    elected.style.zIndex = '100';
    bars.style.display = 'block';
    bars.style.opacity = '0';
    var create = document.createElement('div');
    var createTitle = document.createElement('h2');
    close.setAttribute('class', 'fa-solid fa-xmark');
    close.style.position = 'absolute';
    close.style.top = '0';
    close.style.right = '0';
    close.style.margin = '20px';
    close.style.zIndex = '1000';
    close.style.fontSize = '30px';
    create.appendChild(close);

    var _title = document.createTextNode('Colors Picked!');

    create.appendChild(createTitle);
    createTitle.appendChild(_title);
    elected.appendChild(create);
    create.style.maxHeight = '10%';
    create.style.width = '100%';
    create.style.padding = '20px';

    var _color = document.createElement('div');

    var hex = document.createTextNode("".concat(output.innerHTML));

    _color.appendChild(hex);

    _color.style.width = '46%';
    _color.style.height = '20%';
    _color.style.margin = '2%';
    _color.style.display = 'flex';
    _color.style.justifyContent = 'center';
    _color.style.alignItems = 'center';
    _color.style.backgroundColor = "".concat(output.innerHTML);
    _color.style.fontWeight = 'bold';
    _color.style.textTransform = 'uppercase';
    elected.appendChild(_color);

    if (_color.innerHTML.startsWith('#a') || _color.innerHTML.startsWith('#b') || _color.innerHTML.startsWith('#c') || _color.innerHTML.startsWith('#d') || _color.innerHTML.startsWith('#e') || _color.innerHTML.startsWith('#f')) {
      _color.style.color = 'black';
    } else {
      _color.style.color = 'white';
    }
  } else {
    var _color2 = document.createElement('div');

    var _hex = document.createTextNode("".concat(output.innerHTML));

    _color2.appendChild(_hex);

    _color2.style.width = '46%';
    _color2.style.height = '20%';
    _color2.style.margin = '2%';
    _color2.style.display = 'flex';
    _color2.style.justifyContent = 'center';
    _color2.style.alignItems = 'center';
    _color2.style.backgroundColor = "".concat(output.innerHTML);
    _color2.style.fontWeight = 'bold';
    _color2.style.textTransform = 'uppercase';
    elected.appendChild(_color2);

    if (_color2.innerHTML.startsWith('#a') || _color2.innerHTML.startsWith('#b') || _color2.innerHTML.startsWith('#c') || _color2.innerHTML.startsWith('#d') || _color2.innerHTML.startsWith('#e') || _color2.innerHTML.startsWith('#f')) {
      _color2.style.color = 'black';
    } else {
      _color2.style.color = 'white';
    }

    if (elected.childElementCount == 9) {
      var stopChoosing = function stopChoosing() {
        pick.removeEventListener('click', chooseColor);
      };

      stopChoosing();
      pick.value = 'No more!';
    }
  }

  close.addEventListener('click', function () {
    elected.style.right = '-100%';
    elected.style.transition = '1s linear';
    bars.style.opacity = '1';
    bars.style.transition = '1s linear';
  });
  pick.addEventListener('click', function () {
    elected.style.right = '0';
    elected.style.transition = '1s linear';
    bars.style.opacity = '0';
  });
  bars.addEventListener('click', function () {
    elected.style.right = '0';
    elected.style.transition = '1s linear';
    bars.style.opacity = '0';
    bars.style.transition = '1s linear';
  });
}