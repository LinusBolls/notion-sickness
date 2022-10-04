import { BehaviorSubject } from "rxjs"

import { Icon, Selector, Text } from "../config.data"
import { getCurrentPageId, getPageInfo } from "../util/getCurrentPageInfo"
import openExportPopup from "./openExportPopup"
import startDownloadProcess, { DownloadProcessState } from "../downloadProcess/startDownloadProcess"
import fetchPage from "../notionRequests/fetchPage"

function updateStatus(state: DownloadProcessState) {

    const { status, msg, data, errs } = state;

    (document.querySelector(Selector.CONTROLS) as HTMLElement).innerHTML = msg

    if (status === "finished") {

        (document.querySelector(Selector.ICON) as HTMLElement).innerHTML = Icon.DOWNLOAD;

        // (document.querySelector(Selector.CONTROLS) as HTMLElement).innerHTML = `<a href="${data.dataUrl}" download="${data.fileName}" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; flex-shrink: 0; white-space: nowrap; border-radius: 3px; font-size: 14px; line-height: 1; min-width: 0px; color: rgb(46, 170, 220); font-weight: 400; text-decoration: underline" class="notion-focusable">${Text.DOWNLOAD}</a>`

        (document.querySelector(Selector.CONTROLS) as HTMLElement).innerHTML = `<button style="border: none; background: none; text-decoration: none !important ; user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; flex-shrink: 0; white-space: nowrap; border-radius: 3px; font-size: 14px; line-height: 1; min-width: 0px; color: rgb(46, 170, 220); font-weight: 400; text-decoration: underline" class="notion-focusable">${Text.DOWNLOAD}</button>`;

        (document.querySelector(Selector.CONTROLS + " button") as HTMLElement).onclick = () => openExportPopup(data)

        // (document.querySelector(Selector.CONTROLS_PARENT) as HTMLElement).insertAdjacentHTML("beforeend", `<div style="width: 50%">.json</div><div style="width: 50%">.csv</div>`)
    }
    if (status === "terminated") {

        (document.querySelector(Selector.ICON) as HTMLElement).innerHTML = Icon.WARNING;

        (document.querySelector(Selector.CONTROLS_PARENT) as HTMLElement).insertAdjacentHTML("beforeend", errs.map(i => `<div>${i}</div>`).join(""))
    }
}

export default class AppStateController {

    downloadProcess: BehaviorSubject<DownloadProcessState>

    constructor() { }

    async mountControls() {

        const css = `.linus-focusable:hover{ background-color: rgba(55, 53, 47, 0.08); }`;
        const style = document.createElement("style");

        style.appendChild(document.createTextNode(css));

        document.querySelector("head")?.appendChild(style);

        const controlsParent = document.querySelector(Selector.CONTROLS_PARENT) as HTMLElement

        const controls = document.querySelector(Selector.CONTAINER)

        controls?.parentNode?.removeChild(controls);

        controlsParent.insertAdjacentHTML("beforeend",
            `<div style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; border-radius: 3px; margin-left: 4px; margin-right: 4px; width: calc(100% - 8px);" class="notion-focusable linus-focusable linus-container" role="button" tabindex="0">
                <div style="display: flex; align-items: center; width: 100%; font-size: 14px; min-height: 27px; padding: 2px 10px; margin-top: 1px; margin-bottom: 1px;">
                    <div style="flex-shrink: 0; flex-grow: 0; border-radius: 3px; color: rgba(55, 53, 47, 0.65); width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; margin-right: 8px;" class="linus-icon">
                        ${Icon.WORKING}
                    </div>
                    <div style="flex: 1 1 auto; white-space: nowrap; min-width: 0px; overflow: hidden; text-overflow: ellipsis;" class="linus-controls">
                        Checking for Database...
                    </div>
                </div>
            </div>`
        );
        const currentPageId = getCurrentPageId()

        if (currentPageId == null) return;

        const currentPage = await fetchPage(currentPageId);

        const userId = "";

        const { spaceId, viewId, collectionId, hasCollection, collectionSchema } = getPageInfo(currentPage);

        (document.querySelector(Selector.ICON) as HTMLElement).innerHTML = hasCollection ? Icon.DEFAULT : Icon.NOT_AVAILABLE;
        (document.querySelector(Selector.CONTROLS) as HTMLElement).innerHTML = hasCollection ? Text.DEFAULT : Text.CANNOT_EXPORT

        if (!hasCollection) return;

        (document.querySelector(Selector.CONTROLS) as HTMLElement).onclick = (function (this: AppStateController) {

            (document.querySelector(Selector.CONTROLS) as HTMLElement).onclick = () => { }

            (document.querySelector(Selector.ICON) as HTMLElement).innerHTML = Icon.WORKING

            this.downloadProcess = startDownloadProcess(spaceId, currentPageId, userId, viewId, collectionId, collectionSchema)

            this.downloadProcess.subscribe({ next: updateStatus })
        }).bind(this)
    }

    async checkMount() {

        const isWorking = this.downloadProcess?.getValue()?.status === "working";

        if (!isWorking) this.mountControls();
    }
}