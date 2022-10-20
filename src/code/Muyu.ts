import muyu from "../asset/image/muyu.jpg"
import app from "./AppContainer";
class Muyu {
    private imgDom: HTMLImageElement;
    private preCount: number = -1000;
    private static noCount: number = -1000;
    private static time: number = 100;
    public scaleSmall(): void {
        if (this.preCount !== Muyu.noCount) {
            clearTimeout(this.preCount);
        }
        this.imgDom.style.height = "250px";
        this.preCount = setTimeout(() => {
            this.imgDom.style.height = "300px";
        }, Muyu.time) as unknown as number;
    }

    public scaleBig(): void {
        if (this.preCount !== Muyu.noCount) {
            clearTimeout(this.preCount);
        }
        this.imgDom.style.height = "350px";
        this.preCount = setTimeout(() => {
            this.imgDom.style.height = "300px";
        }, Muyu.time) as unknown as number;
    }

    constructor() {
        const parent = app.querySelector(".main-container");
        let img: HTMLImageElement = document.createElement("img");
        img.src = muyu;
        img.classList.add("muyu-img-show")
        parent.appendChild(img);
        this.imgDom = img;
    }

    public setImageClick(callback:()=>void):void{
        this.imgDom.onclick = ()=>{
            callback();
        }
    }
}

export default Muyu;