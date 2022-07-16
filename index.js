//This is the code before I used Babel

const color = document.getElementById('color');
const background = document.querySelector('body');
const title = document.querySelector('h1');
const text = document.querySelector('h4')
const output = document.getElementById('output');
const pick = document.getElementById('pick');
const elected = document.getElementById('elected');
const close = document.createElement('i');
const bars = document.createElement('i');
bars.setAttribute('class', 'fa-solid fa-bars');
bars.style.position = 'absolute';
bars.style.right = '0';
bars.style.top = '0';
bars.style.margin = '20px';
bars.style.fontSize = '30px';
bars.style.zIndex = '10';
bars.style.display = 'none';
background.appendChild(bars);


color.addEventListener('input', () => {
    const value = color.value;
    background.style.backgroundColor = `${value}`;
    output.style.backgroundColor = `#fff`;
    output.style.color = `${value}`;
    output.innerHTML = `${value}`;
    output.style.border = "unset";
    pick.style.backgroundColor = '#fff';
    pick.style.color = `${value}`;

    if (output.innerHTML.startsWith('#a') || output.innerHTML.startsWith('#b') || output.innerHTML.startsWith('#c') || output.innerHTML.startsWith('#d') || output.innerHTML.startsWith('#e') || output.innerHTML.startsWith('#f')) {
        output.style.backgroundColor = "black";
        title.style.color = "black";
        pick.style.backgroundColor = 'black';
        bars.style.color = 'black';
        text.style.color = 'black'
    } else {
        title.style.color = "white";
        bars.style.color = 'white';
        text.style.color = 'white';
    }
})

pick.addEventListener('click', chooseColor);
    function chooseColor(){
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
            const create = document.createElement('div');
            const createTitle = document.createElement('h2');
            close.setAttribute('class', 'fa-solid fa-xmark');
            close.style.position = 'absolute';
            close.style.top = '0';
            close.style.right = '0';
            close.style.margin = '20px';
            close.style.zIndex = '1000';
            close.style.fontSize = '30px';
            create.appendChild(close);
            const title = document.createTextNode('Colors Picked!');
            create.appendChild(createTitle);
            createTitle.appendChild(title);
            elected.appendChild(create);
            create.style.maxHeight = '10%';
            create.style.width = '100%';
            create.style.padding = '20px';
            const color = document.createElement('div');
            const hex = document.createTextNode(`${output.innerHTML}`);
            color.appendChild(hex);
            color.style.width = '46%';
            color.style.height = '20%';
            color.style.margin = '2%';
            color.style.display = 'flex';
            color.style.justifyContent = 'center';
            color.style.alignItems = 'center';
            color.style.backgroundColor = `${output.innerHTML}`;
            color.style.fontWeight = 'bold';
            color.style.textTransform = 'uppercase';
            elected.appendChild(color);
            if (color.innerHTML.startsWith('#a') || color.innerHTML.startsWith('#b') || color.innerHTML.startsWith('#c') || color.innerHTML.startsWith('#d') || color.innerHTML.startsWith('#e') || color.innerHTML.startsWith('#f')) {
                color.style.color = 'black';
            } else {
                color.style.color = 'white';
            }
        } else {
            const color = document.createElement('div');
            const hex = document.createTextNode(`${output.innerHTML}`);
            color.appendChild(hex);
            color.style.width = '46%';
            color.style.height = '20%';
            color.style.margin = '2%';
            color.style.display = 'flex';
            color.style.justifyContent = 'center';
            color.style.alignItems = 'center';
            color.style.backgroundColor = `${output.innerHTML}`;
            color.style.fontWeight = 'bold';
            color.style.textTransform = 'uppercase';
            elected.appendChild(color);
            if (color.innerHTML.startsWith('#a') || color.innerHTML.startsWith('#b') || color.innerHTML.startsWith('#c') || color.innerHTML.startsWith('#d') || color.innerHTML.startsWith('#e') || color.innerHTML.startsWith('#f')) {
                color.style.color = 'black';
            } else {
                color.style.color = 'white';
            }
    
            if (elected.childElementCount == 9) {
                function stopChoosing() {
                    pick.removeEventListener('click', chooseColor);
                }
                stopChoosing()
                pick.value = 'No more!'
            }
        }
        close.addEventListener('click', ()=>{
            elected.style.right = '-100%';
            elected.style.transition = '1s linear';
            bars.style.opacity = '1';
            bars.style.transition = '1s linear'
        })
        pick.addEventListener('click',()=>{
            elected.style.right = '0';
            elected.style.transition = '1s linear';
            bars.style.opacity = '0';
        });

        bars.addEventListener('click', ()=>{
            elected.style.right = '0';
            elected.style.transition = '1s linear';
            bars.style.opacity = '0';
            bars.style.transition = '1s linear';
        })
    }