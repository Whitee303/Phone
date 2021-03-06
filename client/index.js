/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as natives from 'natives';


let mainView;
let OpenClose;
alt.on('keydown', (key) => {
    if (key === 0x4C && !OpenClose) {
        mainView = new alt.WebView("http://resource/client/html/index.html");
        mainView.focus();
        OpenClose = true;
        alt.log("Res");
        alt.showCursor(true);
        alt.toggleGameControls(false);
        return;


    }
    if (key === 0x4C && OpenClose) {

        OpenClose = null;
        alt.log("Close");
        alt.showCursor(false);
        mainView.destroy();
        alt.toggleGameControls(true);
        return;

    }
});
