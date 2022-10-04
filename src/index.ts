import AppStateController from "./view/AppStateController"
import WindowLocationObserver from "./view/WindowLocationObserver"

const controller = new AppStateController();
const observer = new WindowLocationObserver();

observer.startObserving(controller.checkMount);