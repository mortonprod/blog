let colours = [];
colours.push(' #343477');
colours.push(' #8080B3');
colours.push(' #565695');
colours.push(' #1A1A59');
colours.push(' #09093B');

colours.push('#A7383D');
colours.push('#FBA7AB');
colours.push('#D1686E');
colours.push('#7D151A');
colours.push('#540004');

colours.push('#D1ED9E');
colours.push('#789E35');
colours.push('#A2C563');
colours.push('#537614');
colours.push('#334F00');
import { Promise } from 'es6-promise';
import "./index.scss";
import "./bootstrap/css/bootstrap.min.css";

function noscroll() {
    window.scrollTo(0, 0);
}
window.onload = function () {
    window.addEventListener('scroll', noscroll);//Make sure the user can't do anything during load.
    let p = new Promise(function (resolve, reject) {//Create all those blocks
        createFixedBlocks(5, 4,resolve);
    });
    p.then(function () {//transition of animation of load 
        let load = document.getElementById("load");
        load.className = load.className + " fadeOut "
        load.addEventListener("transitionend", function () {
            document.body.removeChild(load);//remove load
            drawCanvas(() => {//then run animation.
                window.removeEventListener('scroll', noscroll);//Remove old scroll
                scrollEffect();//Add scroll effects.
            });
        }, false);
    })
};
function createFixedBlocks(XNum: number, YNum: number, cb: Function = () => { }) {
    let afterDiv = document.getElementById("splash");///This is the element we want to place the blocks before
    let parent = afterDiv.parentElement;
    let XWidth = 100 / XNum;//The fraction each block should be given along X. 
    let YWidth = 100 / YNum;//The fraction each block should be given along Y. 
    for (let i = 0; i < XNum; i++) {
        for (let j = 0; j < YNum; j++) {
            let div = <HTMLDivElement>document.createElement("DIV");
            div.className = div.className + " fixed "
            div.style['background-color'] = getColour(i + j);
            div.style['left'] = String(XWidth * i + XWidth * getRandom(-1, 1)) + "%";
            div.style['width'] = String(XWidth * getRandom(1, 5)) + "%";
            div.style['top'] = String(YWidth * j + YWidth * getRandom(-1, 1)) + "%";
            div.style['height'] = String(YWidth + YWidth * getRandom(0, 5)) + "%";
            div.setAttribute('data-speed', String(getRandom(5, 20)));
            if (Math.random() < 0.5) {///Randomly move left or right.
                div.setAttribute('data-type', "right");
            } else {
                div.setAttribute('data-type', "left");
            }
            parent.insertBefore(div, afterDiv);
        }
    }
    cb();
}
function getColour(i: number): number {
    let rem = i % colours.length;//Always use remainder to look through colours.
    return colours[rem];
}
function getRandom(start, end): number {
    //Examples to get any range.
    //start=20 end=50
    //30 * (0 ->1) + 20 

    //start -20 end=50
    //(50 + 20)*(0->1) -20 
    return (end - start) * Math.random() + start
}
function drawCanvas(cb: Function = () => { }) {
    let canvas = document.querySelector("canvas");
    var ctx = document.querySelector("canvas").getContext("2d"),
        dashLen = 220, dashOffset = dashLen, speed = 10,
        txt = "Boxes... ", x = 1, i = 0;
    let fontSize = 20;
    ctx.font = fontSize + "px Comic Sans MS, cursive, TSCu_Comic, sans-serif";
    ctx.lineWidth = 7; ctx.lineJoin = "round"; ctx.globalAlpha = 1;
    ctx.strokeStyle = "#1f2f90";
    ctx.fillStyle = "white";

    let textWidth = ctx.measureText(txt).width;
    while (canvas.width - 20 > textWidth) {
        fontSize = fontSize + 1;
        ctx.font = fontSize + ctx.font.slice(2)
        textWidth = ctx.measureText(txt).width;
    }
    (function draw() {
        console.log("Print: " + canvas.width + " " + window.innerWidth);
        ctx.clearRect(x, 0, 60, 150);//Always clear any other pixel changes before drawing again.
        ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
        console.log("setlineDash: " + txt[i] + "  " + (dashLen - dashOffset) + "   " + (dashOffset - speed))
        dashOffset -= speed;                                         // reduce dash length
        ctx.strokeText(txt[i], x, 90);                               // stroke letter

        if (dashOffset > 0) requestAnimationFrame(draw);             // animate
        else {
            ctx.fillText(txt[i], x, 90);                               // fill final letter
            dashOffset = dashLen;                                      // prep next char
            x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
            ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
            ctx.rotate(Math.random() * 0.005);                         // random rotation
            if (i < txt.length) {
                requestAnimationFrame(draw);
            } else {
                return cb();
            }
        }
    })();
}
function scrollEffect(cb: Function = () => { }) {
    let fixedLayers = window.document.querySelectorAll(".fixed");///Get fixed elements.
    interface info {
        layer: HTMLElement;//Reference to layer
        speed: number;//Speed of layer
        start: number;//When it should start with reference to browser scroll.
        end: number;//When it should end with reference to browser scroll.
        type: string;//How it should behave 
        x: number;//Store transformation in each direction matched to scroll down value depending on type. 
        y: number;
        z: number;

    }
    let layers: Array<info> = [];//Store element information.
    for (let i = 0; i < fixedLayers.length; i++) {
        let layer = <HTMLElement>fixedLayers[i];
        layers.push({
            layer: layer,///Store reference to layer
            speed: Number(layer.dataset["speed"]),
            start: Number(layer.dataset["start"]),
            end: Number(layer.dataset["end"]),
            type: layer.dataset["type"],
            x: 0,
            y: 0,
            z: 0
        });
    }

    window.addEventListener("scroll", (event) => {
        window.requestAnimationFrame(function () {
            move()
        });
    });
    cb();
    let prevScrollPosition = 0;///Get initial scroll position.
    function move() {
        let topDistance = window.pageYOffset;///The scroll distance in the number of pixels.
        layers.forEach((el: info) => {
            let change = topDistance - prevScrollPosition;///Work out change in scroll position for each event.
            if (el.type === "top") {///Apply different transformation depending on type.
                //Only update position of each el upward until bottom reaches top of viewport, therefore out of sight.
                if (el.layer.getBoundingClientRect().bottom > 0) {
                    el.y = el.y - (change * el.speed)
                }
            } else if (el.type === "left") {
                el.x = el.x - (change * el.speed)
            } else if (el.type === "right") {
                ///If we still have object on right then move left
                el.x = el.x + (change * el.speed)
            } else {
                console.log("No el type found.")
            }
            let translate3d = 'translate3d(' + el.x + 'px,' + el.y + 'px, 0)';
            el.layer.style['-webkit-transform'] = translate3d;
            el.layer.style['-moz-transform'] = translate3d;
            el.layer.style['-ms-transform'] = translate3d;
            el.layer.style['-o-transform'] = translate3d;
            el.layer.style.transform = translate3d;
        });
        prevScrollPosition = topDistance;
    };
}