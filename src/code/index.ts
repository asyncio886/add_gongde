import AudioShow from "./Audio";
import Menu from "./Menu";
import Muyu from "./Muyu";
const muyu = new Muyu();
const audio = new AudioShow();
const menu = new Menu();
menu.onNegativeClick(()=>{
    audio.negativeClickDo();
    muyu.scaleBig();
});

menu.onPositiveClick(()=>{
    audio.positiveClickDo();
    muyu.scaleSmall();
});
muyu.setImageClick(()=>{
    menu.addGongde();
});



