import AppStateController from "./view/AppStateController"
import WindowLocationObserver from "./view/WindowLocationObserver"

import { Buffer } from "buffer"

global.Buffer = global.Buffer || Buffer;

const controller = new AppStateController();
const observer = new WindowLocationObserver();

observer.startObserving(() => controller.checkMount());