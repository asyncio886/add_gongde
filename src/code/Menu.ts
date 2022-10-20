import app from "./AppContainer";
class Menu {
    private negativeCallback: () => void;
    private postiveCallback: () => void;
    private gongdeShow: HTMLDivElement;
    private static localKey = "gongde";
    private loadGongdeLocal(): void {
        let value: string | null = localStorage.getItem(Menu.localKey);
        if (!value) {
            this.gongdeCount = 0;
        }
        else {
            this.gongdeCount = (Number.isNaN(value) ? 0 : Number(value));
        }
    }
    private storeLocal() {
        localStorage.setItem(Menu.localKey, this.gongdeCount + "");
    }
    // 每次增加削减的功德
    private perValue: number = 10;
    // 功德数
    private gongdeCount: number = 0;
    public onPositiveClick(callback: () => void): void {
        this.postiveCallback = callback;
    }
    public onNegativeClick(callback: () => void): void {
        this.negativeCallback = callback;
    }
    public addGongde(): void {
        this.gongdeCount += this.perValue;
        this.gongdeShow.innerText = this.gongdeCount + "";
        this.storeLocal();
    }
    private removeGongde(): void {
        this.gongdeCount -= this.perValue;
        this.gongdeShow.innerText = this.gongdeCount + "";
        this.storeLocal();
    }
    constructor() {
        this.loadGongdeLocal();
        let container = document.createElement("div");
        container.classList.add("menu-container")
        let positiveBtn = document.createElement("button");
        positiveBtn.innerText = "积攒功德";
        positiveBtn.onclick = () => {
            this.postiveCallback();
            this.addGongde();
        }
        let negativeBtn = document.createElement("button");
        negativeBtn.innerText = "销毁功德";
        negativeBtn.onclick = () => {
            if (this.gongdeCount === 0) {
                alert("你还没有功德")
                return;
            }
            this.negativeCallback();
            this.removeGongde();
        }
        container.appendChild(positiveBtn);
        container.appendChild(negativeBtn);
        let gongdeValue = document.createElement('div');
        gongdeValue.innerText = this.gongdeCount + "";
        this.gongdeShow = gongdeValue;
        container.appendChild(gongdeValue);
        app.appendChild(container);
    }
}

export default Menu;