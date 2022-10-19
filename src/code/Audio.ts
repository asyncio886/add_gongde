import music from "../asset/audio/audio.m4a";
import app from "./AppContainer";
class AudioShow {
    private dom:HTMLAudioElement;
    private active(): void {
        this.dom.play();
    }

    private stop(): void {
        this.dom.load();
    }

    public positiveClickDo(): void {
        this.stop();
        this.active();
    }

    public negativeClickDo(): void {
        this.stop();
        this.active();
    }
    constructor(){
        let audioDom = document.createElement("audio");
        audioDom.style.display = "none";
        audioDom.src = music;
        this.dom = audioDom;
        app.appendChild(audioDom);
    }
}


export default AudioShow;
