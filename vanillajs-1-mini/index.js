//console.log('Hello, world')
let count = 0;


const increase = () => {
    count++;
    element.innerText = count;
}


const decrease = () => {
    count--;
    element.innerText = count;
}


const reset = () => {
    count = 0;
    element.innerHTML = "<mark>" + count + "</mark>";
}


const element = document.getElementById('counter')


const selectTheme = (theme) => {
    document.getElementsByTagName('body')[0].className = theme;
    document.getElementsByTagName('main')[0].className = theme;
    const buttons = document.getElementsByTagName('button');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
    }
}