/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as natives from 'natives';


let mainView;
let OpenClose;
alt.on('keydown', (key) => {
    if (key === 0x45 && !OpenClose) {
        alt.setTimeout(() => {
            mainView = new alt.WebView("http://resource/client/html/index.html", false);
            mainView.focus();
            OpenClose = true;
            alt.log("Res");
            alt.showCursor(true);
            alt.toggleGameControls(false);
            return;
        }, 1000);

    }
    if (key === 0x45 && OpenClose) {
        OpenClose = null;
        alt.log("Close");
        alt.showCursor(false);
        mainView.destroy()
        alt.toggleGameControls(true);
        return;
    }
});

