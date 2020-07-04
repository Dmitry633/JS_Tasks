'use strict';
class Options{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign
    }
    makeDiv(text){
        let newDiv = document.createElement('div');
            newDiv.innerHTML = `<h1> ${text} </h1>`;
            newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
            document.body.appendChild(newDiv);
    }
}
let newElement = new Options ('auto', '250px', 'green', '18px', 'center');
newElement.makeDiv('Получилось!!!');