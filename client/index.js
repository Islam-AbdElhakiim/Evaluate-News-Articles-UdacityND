//A starting point for webpack configuration

// JS Files Goes Here
import {handleSubmit} from "./js/handleSubmit";
import {callServer} from "./js/callServer";
import {checkURL} from "./js/checkURL";
import {fillTheUi} from "./js/fillTheUi";

// Style Files Goes Here
import "./styles/style.scss";
import "./styles/loader.scss";

export {handleSubmit, callServer, checkURL, fillTheUi};
