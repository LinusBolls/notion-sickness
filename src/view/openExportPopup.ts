import { DownloadProcessResult } from "../downloadProcess/startDownloadProcess";

const closeOnclick = `onclick='document.querySelector(".notion-overlay-container.notion-default-overlay-container").innerHTML = ""'`

export default function openExportPopup(data: DownloadProcessResult) {

    const { collectionTitle, files: { csv, xml, json, assetZip } } = data;

    (document.querySelector(".notion-overlay-container.notion-default-overlay-container") as HTMLElement).innerHTML =
        `<head>
<style>
    .linus-popup .notion-focusable:hover {
        background: rgba(55, 53, 47, 0.08) !important;
    }
</style>
</head>
<div style="position: relative; z-index: 0;"></div>
<div data-overlay="true" style="pointer-events: auto; position: relative; z-index: 0;" class="linus-popup">
    <div
        style="width: 100vw; height: 100vh; position: fixed; top: 0px; left: 0px; display: flex; align-items: center; justify-content: center; pointer-events: auto; opacity: 1; transform: translateZ(0px);">
        <div style="position: absolute; inset: 0px; background: rgba(15, 15, 15, 0.6) none repeat scroll 0% 0%;" ${closeOnclick}>
        </div>
        <div
            style="position: relative; z-index: 1; box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 5px 10px, rgba(15, 15, 15, 0.2) 0px 15px 40px; border-radius: 3px; background: white none repeat scroll 0% 0%; margin-bottom: 0px; padding: 24px 36px; min-width: 300px;">
            <div style="display: flex; align-items: center; margin-top: 8px; margin-bottom: 18px;">
                <div
                    style="font-size: 24px; line-height: 1.2; margin-bottom: 6px; font-weight: 700; margin-right: auto;">
                    Export "${collectionTitle}"</div><a href="https://www.notion.so/help/import-data-into-notion" target="_blank"
                    rel="noopener noreferrer"
                    style="display: block; text-decoration: none; user-select: none; cursor: pointer; color: inherit;">
                    <div style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: inline-flex; align-items: center; flex-shrink: 0; white-space: nowrap; height: 24px; border-radius: 3px; font-size: 14px; line-height: 1.2; min-width: 0px; padding-left: 6px; padding-right: 6px; color: rgba(55, 53, 47, 0.65);"
                        class="notion-focusable" role="button" tabindex="0"><svg viewBox="0 0 16 16"
                            style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0; backface-visibility: hidden; margin-right: 6px;"
                            class="help">
                        </svg>Notion Sickness</div>
                </a>
            </div>
            <div>
                <div
                    style="display: flex; align-items: center; justify-content: center; width: 752px; min-height: 240px;">
                    <div
                        style="display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 1fr; gap: 4px 16px; width: 100%;">
                        <!-- <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0"><img
                                style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 3px; margin-right: 10px; background: white none repeat scroll 0% 0%;"
                                src="/images/import/evernote.png">
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">Evernote</div>
                                    <div style="margin-left: auto;"><a
                                            href="https://www.notion.so/help/import-data-into-notion#evernote"
                                            target="_blank" rel="noopener noreferrer"
                                            style="display: block; text-decoration: none; user-select: none; cursor: pointer; color: inherit; margin-left: auto;">
                                            <div style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 3px; height: 24px; width: 24px; padding: 0px;"
                                                class="notion-focusable" role="button" tabindex="0"><svg
                                                    viewBox="0 0 16 16"
                                                    style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0; backface-visibility: hidden;"
                                                    class="help">
                                                    <path
                                                        d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.667 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.84277 9.4248C8.21875 9.4248 8.45801 9.21289 8.47852 8.93262C8.47852 8.90527 8.47852 8.87109 8.47852 8.85059C8.49902 8.49512 8.74512 8.25586 9.18945 7.96875C9.85938 7.52441 10.2969 7.13477 10.2969 6.3418C10.2969 5.2002 9.27148 4.55078 8.06152 4.55078C6.89258 4.55078 6.09277 5.08398 5.88086 5.72656C5.83984 5.84277 5.81934 5.95898 5.81934 6.08203C5.81934 6.41016 6.0791 6.61523 6.35254 6.61523C6.60547 6.61523 6.76953 6.5127 6.90625 6.32812L7.01562 6.19141C7.24121 5.81543 7.56934 5.61719 7.97949 5.61719C8.5332 5.61719 8.90918 5.94531 8.90918 6.41016C8.90918 6.84082 8.62207 7.05273 8.04102 7.45605C7.55566 7.79102 7.2002 8.14648 7.2002 8.76855V8.84375C7.2002 9.22656 7.43262 9.4248 7.84277 9.4248ZM7.83594 11.5234C8.27344 11.5234 8.63574 11.2021 8.63574 10.7715C8.63574 10.3408 8.27344 10.0264 7.83594 10.0264C7.3916 10.0264 7.03613 10.3477 7.03613 10.7715C7.03613 11.2021 7.39844 11.5234 7.83594 11.5234Z">
                                                    </path>
                                                </svg></div>
                                        </a></div>
                                </div>
                                <div style="font-size: 12px; color: rgba(55, 53, 47, 0.65); word-break: keep-all;">
                                    Get $5 in credit on import</div>
                            </div>
                        </div> -->
                        <!-- <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0"><img
                                style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 3px; margin-right: 10px; background: white none repeat scroll 0% 0%;"
                                src="/images/import/trello.png">
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">Trello</div>
                                    <div style="margin-left: auto;"></div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0"><img
                                style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 3px; margin-right: 10px; background: white none repeat scroll 0% 0%;"
                                src="/images/import/asana.png">
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">Asana</div>
                                    <div style="margin-left: auto;"></div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0"><img
                                style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 3px; margin-right: 10px; background: white none repeat scroll 0% 0%;"
                                src="/images/import/confluence.png">
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">Confluence</div>
                                    <div style="margin-left: auto;"><a
                                            href="https://www.notion.so/help/import-data-into-notion#confluence"
                                            target="_blank" rel="noopener noreferrer"
                                            style="display: block; text-decoration: none; user-select: none; cursor: pointer; color: inherit; margin-left: auto;">
                                            <div style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 3px; height: 24px; width: 24px; padding: 0px;"
                                                class="notion-focusable" role="button" tabindex="0"><svg
                                                    viewBox="0 0 16 16"
                                                    style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0; backface-visibility: hidden;"
                                                    class="help">
                                                    <path
                                                        d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.667 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.84277 9.4248C8.21875 9.4248 8.45801 9.21289 8.47852 8.93262C8.47852 8.90527 8.47852 8.87109 8.47852 8.85059C8.49902 8.49512 8.74512 8.25586 9.18945 7.96875C9.85938 7.52441 10.2969 7.13477 10.2969 6.3418C10.2969 5.2002 9.27148 4.55078 8.06152 4.55078C6.89258 4.55078 6.09277 5.08398 5.88086 5.72656C5.83984 5.84277 5.81934 5.95898 5.81934 6.08203C5.81934 6.41016 6.0791 6.61523 6.35254 6.61523C6.60547 6.61523 6.76953 6.5127 6.90625 6.32812L7.01562 6.19141C7.24121 5.81543 7.56934 5.61719 7.97949 5.61719C8.5332 5.61719 8.90918 5.94531 8.90918 6.41016C8.90918 6.84082 8.62207 7.05273 8.04102 7.45605C7.55566 7.79102 7.2002 8.14648 7.2002 8.76855V8.84375C7.2002 9.22656 7.43262 9.4248 7.84277 9.4248ZM7.83594 11.5234C8.27344 11.5234 8.63574 11.2021 8.63574 10.7715C8.63574 10.3408 8.27344 10.0264 7.83594 10.0264C7.3916 10.0264 7.03613 10.3477 7.03613 10.7715C7.03613 11.2021 7.39844 11.5234 7.83594 11.5234Z">
                                                    </path>
                                                </svg></div>
                                        </a></div>
                                </div>
                            </div>
                        </div> -->
                        <a href="${json.url}" download="${json.name}" style="color: rgb(55, 53, 47); text-decoration: none">
                        <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0">
                            <div
                                style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 3px; margin-right: 8px; color: rgba(55, 53, 47, 0.65); background: rgb(251, 251, 250) none repeat scroll 0% 0%;">
                                <svg viewBox="-6 -7 24 24"
                                    style="width: 28px; height: 28px; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;"
                                    class="importText">
                    
                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.370739 5.53977V4.68324C0.862216 4.68324 1.20313 4.58523 1.39347 4.3892C1.58381 4.19318 1.67898 3.87642 1.67898 3.43892V2.49716C1.67898 1.97159 1.75142 1.55114 1.89631 1.2358C2.04403 0.917613 2.24858 0.677557 2.50994 0.515625C2.77415 0.353693 3.08665 0.245738 3.44744 0.191761C3.80824 0.137784 4.20313 0.110795 4.6321 0.110795V1.46591C4.29688 1.46591 4.04119 1.50994 3.86506 1.59801C3.69176 1.68324 3.57386 1.81676 3.51136 1.99858C3.44886 2.17756 3.41761 2.40483 3.41761 2.6804V3.92472C3.41761 4.14062 3.37784 4.34659 3.2983 4.54261C3.21875 4.7358 3.07102 4.90767 2.85511 5.05824C2.6392 5.20597 2.33097 5.32386 1.9304 5.41193C1.52983 5.49716 1.00994 5.53977 0.370739 5.53977ZM4.6321 10.8963C4.20313 10.8963 3.80824 10.8693 3.44744 10.8153C3.08665 10.7614 2.77415 10.6534 2.50994 10.4915C2.24858 10.3295 2.04403 10.0895 1.89631 9.77131C1.75142 9.45597 1.67898 9.03551 1.67898 8.50994V7.56392C1.67898 7.12642 1.58381 6.80966 1.39347 6.61364C1.20313 6.41761 0.862216 6.3196 0.370739 6.3196V5.46307C1.00994 5.46307 1.52983 5.5071 1.9304 5.59517C2.33097 5.6804 2.6392 5.7983 2.85511 5.94886C3.07102 6.09659 3.21875 6.26847 3.2983 6.46449C3.37784 6.65767 3.41761 6.86364 3.41761 7.08239V8.3267C3.41761 8.59943 3.44886 8.82528 3.51136 9.00426C3.57386 9.18608 3.69176 9.3196 3.86506 9.40483C4.04119 9.4929 4.29688 9.53693 4.6321 9.53693V10.8963ZM0.370739 6.3196V4.68324H1.90057V6.3196H0.370739ZM12.2259 5.46307V6.3196C11.7372 6.3196 11.3963 6.41761 11.2031 6.61364C11.0128 6.80966 10.9176 7.12642 10.9176 7.56392V8.50994C10.9176 9.03551 10.8438 9.45597 10.696 9.77131C10.5511 10.0895 10.3466 10.3295 10.0824 10.4915C9.82102 10.6534 9.50994 10.7614 9.14915 10.8153C8.79119 10.8693 8.39631 10.8963 7.96449 10.8963V9.53693C8.29972 9.53693 8.55398 9.4929 8.72727 9.40483C8.90341 9.3196 9.02273 9.18608 9.08523 9.00426C9.14773 8.82528 9.17898 8.59943 9.17898 8.3267V7.08239C9.17898 6.86364 9.21875 6.65767 9.2983 6.46449C9.37784 6.26847 9.52557 6.09659 9.74148 5.94886C9.95739 5.7983 10.2656 5.6804 10.6662 5.59517C11.0668 5.5071 11.5866 5.46307 12.2259 5.46307ZM7.96449 0.110795C8.39631 0.110795 8.79119 0.137784 9.14915 0.191761C9.50994 0.245738 9.82102 0.353693 10.0824 0.515625C10.3466 0.677557 10.5511 0.917613 10.696 1.2358C10.8438 1.55114 10.9176 1.97159 10.9176 2.49716V3.43892C10.9176 3.87642 11.0128 4.19318 11.2031 4.3892C11.3963 4.58523 11.7372 4.68324 12.2259 4.68324V5.53977C11.5866 5.53977 11.0668 5.49716 10.6662 5.41193C10.2656 5.32386 9.95739 5.20597 9.74148 5.05824C9.52557 4.90767 9.37784 4.7358 9.2983 4.54261C9.21875 4.34659 9.17898 4.14062 9.17898 3.92472V2.6804C9.17898 2.40483 9.14773 2.17756 9.08523 1.99858C9.02273 1.81676 8.90341 1.68324 8.72727 1.59801C8.55398 1.50994 8.29972 1.46591 7.96449 1.46591V0.110795ZM12.2259 4.68324V6.3196H10.696V4.68324H12.2259Z" fill="rgba(55, 53, 47, 0.65)"/>
                                </svg></div>
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">JSON</div>
                                    <div style="margin-left: auto;"></div>
                                </div>
                            </div>
                        </div>
                        </a>
                        <a href="${csv.url}" download="${csv.name}" style="color: rgb(55, 53, 47); text-decoration: none">
                        <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0">
                            <div
                                style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 3px; margin-right: 8px; color: rgba(55, 53, 47, 0.65); background: rgb(251, 251, 250) none repeat scroll 0% 0%;">
                                <svg viewBox="0 0 32 32"
                                    style="width: 28px; height: 28px; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;"
                                    class="importCSV">
                                    <polygon
                                        points="21.0286 9.14285 10.7429 9.14285 10.7429 10.8571 16.3143 16 10.7429 21.1429 10.7429 22.8571 21.0286 22.8571 21.0286 20.2857 15.0286 20.2857 19.3143 16 15.0286 11.7143 21.0286 11.7143">
                                    </polygon>
                                </svg></div>
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">CSV</div>
                                    <div style="margin-left: auto;"></div>
                                </div>
                            </div>
                        </div>
                        </a>
                        <a href="${xml.url}" download="${xml.name}" style="color: rgb(55, 53, 47); text-decoration: none">
                        <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0">
                            <div
                                style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 3px; margin-right: 8px; color: rgba(55, 53, 47, 0.65); background: rgb(251, 251, 250) none repeat scroll 0% 0%;">
                                <svg viewBox="0 0 32 32"
                                    style="width: 28px; height: 28px; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;"
                                    class="importHTML">
                                    <path
                                        d="M13.088,21.472 L7.93605,16.32 L13.088,11.168 L11.52,9.59999 L4.80005,16.32 L11.52,23.04 L13.088,21.472 Z M18.912,21.472 L24.0641,16.32 L18.912,11.168 L20.48,9.59999 L27.2,16.32 L20.48,23.04 L18.912,21.472 Z">
                                    </path>
                                </svg></div>
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">XML</div>
                                    <div style="margin-left: auto;"></div>
                                </div>
                            </div>
                        </div>
                        </a>
                        <a href="${assetZip.url}" download="${assetZip.name}" style="color: rgb(55, 53, 47); text-decoration: none">
                        <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0">
                            <div
                                style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 3px; margin-right: 8px; color: rgba(55, 53, 47, 0.65); background: rgb(251, 251, 250) none repeat scroll 0% 0%;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="-25 -40 200 200"
                                    style="width: 28px; height: 28px; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;"
                                    class="importText">
                                    <path d="M143.209,105.968c0,6.25-5.113,11.364-11.363,11.364H18.203c-6.25
                                    0-11.363-5.113-11.363-11.364v-86.37c0-6.25,5.113-11.363
                                    11.363-11.363h113.643c6.25,0,11.363,5.113,11.363,11.363V105.968z
                                    M18.203,17.326c-1.207,0-2.271,1.068-2.271,2.271v86.37c0,1.207,1.065
                                    2.271,2.271,2.271h113.643c1.203,0,2.274-1.064
                                    2.274-2.271v-86.37c0-1.203-1.071-2.271-2.274-2.271H18.203z
                                    M38.661,53.691c-7.529,0-13.641-6.108-13.641-13.635s6.112-13.638,13.641-13.638
                                    c7.526,0,13.632,6.111,13.632,13.638S46.188,53.691,38.661,53.691z
                                    M125.025,99.15H25.02V85.51l22.73-22.724l11.363,11.36l36.365-36.361l29.547,29.547V99.15z"/>
                                    </svg>
                                </div>
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">IMAGES</div>
                                    <div style="margin-left: auto;"></div>
                                </div>
                            </div>
                        </div>
                        </a>
                        <!-- <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0"><img
                                style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 3px; margin-right: 10px; background: white none repeat scroll 0% 0%;"
                                src="/images/import/word.png">
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">Word</div>
                                    <div style="margin-left: auto;"></div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0"><img
                                style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 3px; margin-right: 10px; background: white none repeat scroll 0% 0%;"
                                src="/images/import/google-docs.png">
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">Google Docs</div>
                                    <div style="margin-left: auto;"><a
                                            href="https://www.notion.so/help/import-data-into-notion#google-docs"
                                            target="_blank" rel="noopener noreferrer"
                                            style="display: block; text-decoration: none; user-select: none; cursor: pointer; color: inherit; margin-left: auto;">
                                            <div style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 3px; height: 24px; width: 24px; padding: 0px;"
                                                class="notion-focusable" role="button" tabindex="0"><svg
                                                    viewBox="0 0 16 16"
                                                    style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0; backface-visibility: hidden;"
                                                    class="help">
                                                    <path
                                                        d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.667 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.84277 9.4248C8.21875 9.4248 8.45801 9.21289 8.47852 8.93262C8.47852 8.90527 8.47852 8.87109 8.47852 8.85059C8.49902 8.49512 8.74512 8.25586 9.18945 7.96875C9.85938 7.52441 10.2969 7.13477 10.2969 6.3418C10.2969 5.2002 9.27148 4.55078 8.06152 4.55078C6.89258 4.55078 6.09277 5.08398 5.88086 5.72656C5.83984 5.84277 5.81934 5.95898 5.81934 6.08203C5.81934 6.41016 6.0791 6.61523 6.35254 6.61523C6.60547 6.61523 6.76953 6.5127 6.90625 6.32812L7.01562 6.19141C7.24121 5.81543 7.56934 5.61719 7.97949 5.61719C8.5332 5.61719 8.90918 5.94531 8.90918 6.41016C8.90918 6.84082 8.62207 7.05273 8.04102 7.45605C7.55566 7.79102 7.2002 8.14648 7.2002 8.76855V8.84375C7.2002 9.22656 7.43262 9.4248 7.84277 9.4248ZM7.83594 11.5234C8.27344 11.5234 8.63574 11.2021 8.63574 10.7715C8.63574 10.3408 8.27344 10.0264 7.83594 10.0264C7.3916 10.0264 7.03613 10.3477 7.03613 10.7715C7.03613 11.2021 7.39844 11.5234 7.83594 11.5234Z">
                                                    </path>
                                                </svg></div>
                                        </a></div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0"><img
                                style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 3px; margin-right: 10px; background: white none repeat scroll 0% 0%;"
                                src="/images/import/dropbox-paper.png">
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">Dropbox Paper</div>
                                    <div style="margin-left: auto;"><a
                                            href="https://www.notion.so/help/import-data-into-notion#dropbox-paper"
                                            target="_blank" rel="noopener noreferrer"
                                            style="display: block; text-decoration: none; user-select: none; cursor: pointer; color: inherit; margin-left: auto;">
                                            <div style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 3px; height: 24px; width: 24px; padding: 0px;"
                                                class="notion-focusable" role="button" tabindex="0"><svg
                                                    viewBox="0 0 16 16"
                                                    style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0; backface-visibility: hidden;"
                                                    class="help">
                                                    <path
                                                        d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.667 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.84277 9.4248C8.21875 9.4248 8.45801 9.21289 8.47852 8.93262C8.47852 8.90527 8.47852 8.87109 8.47852 8.85059C8.49902 8.49512 8.74512 8.25586 9.18945 7.96875C9.85938 7.52441 10.2969 7.13477 10.2969 6.3418C10.2969 5.2002 9.27148 4.55078 8.06152 4.55078C6.89258 4.55078 6.09277 5.08398 5.88086 5.72656C5.83984 5.84277 5.81934 5.95898 5.81934 6.08203C5.81934 6.41016 6.0791 6.61523 6.35254 6.61523C6.60547 6.61523 6.76953 6.5127 6.90625 6.32812L7.01562 6.19141C7.24121 5.81543 7.56934 5.61719 7.97949 5.61719C8.5332 5.61719 8.90918 5.94531 8.90918 6.41016C8.90918 6.84082 8.62207 7.05273 8.04102 7.45605C7.55566 7.79102 7.2002 8.14648 7.2002 8.76855V8.84375C7.2002 9.22656 7.43262 9.4248 7.84277 9.4248ZM7.83594 11.5234C8.27344 11.5234 8.63574 11.2021 8.63574 10.7715C8.63574 10.3408 8.27344 10.0264 7.83594 10.0264C7.3916 10.0264 7.03613 10.3477 7.03613 10.7715C7.03613 11.2021 7.39844 11.5234 7.83594 11.5234Z">
                                                    </path>
                                                </svg></div>
                                        </a></div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0"><img
                                style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 3px; margin-right: 10px; background: white none repeat scroll 0% 0%;"
                                src="/images/import/quip.png">
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">Quip</div>
                                    <div style="margin-left: auto;"><a
                                            href="https://www.notion.so/help/import-data-into-notion#quip"
                                            target="_blank" rel="noopener noreferrer"
                                            style="display: block; text-decoration: none; user-select: none; cursor: pointer; color: inherit; margin-left: auto;">
                                            <div style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 3px; height: 24px; width: 24px; padding: 0px;"
                                                class="notion-focusable" role="button" tabindex="0"><svg
                                                    viewBox="0 0 16 16"
                                                    style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0; backface-visibility: hidden;"
                                                    class="help">
                                                    <path
                                                        d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.667 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.84277 9.4248C8.21875 9.4248 8.45801 9.21289 8.47852 8.93262C8.47852 8.90527 8.47852 8.87109 8.47852 8.85059C8.49902 8.49512 8.74512 8.25586 9.18945 7.96875C9.85938 7.52441 10.2969 7.13477 10.2969 6.3418C10.2969 5.2002 9.27148 4.55078 8.06152 4.55078C6.89258 4.55078 6.09277 5.08398 5.88086 5.72656C5.83984 5.84277 5.81934 5.95898 5.81934 6.08203C5.81934 6.41016 6.0791 6.61523 6.35254 6.61523C6.60547 6.61523 6.76953 6.5127 6.90625 6.32812L7.01562 6.19141C7.24121 5.81543 7.56934 5.61719 7.97949 5.61719C8.5332 5.61719 8.90918 5.94531 8.90918 6.41016C8.90918 6.84082 8.62207 7.05273 8.04102 7.45605C7.55566 7.79102 7.2002 8.14648 7.2002 8.76855V8.84375C7.2002 9.22656 7.43262 9.4248 7.84277 9.4248ZM7.83594 11.5234C8.27344 11.5234 8.63574 11.2021 8.63574 10.7715C8.63574 10.3408 8.27344 10.0264 7.83594 10.0264C7.3916 10.0264 7.03613 10.3477 7.03613 10.7715C7.03613 11.2021 7.39844 11.5234 7.83594 11.5234Z">
                                                    </path>
                                                </svg></div>
                                        </a></div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0"><img
                                style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 3px; margin-right: 10px; background: white none repeat scroll 0% 0%;"
                                src="/images/import/workflowy.png">
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">Workflowy</div>
                                    <div style="margin-left: auto;"><a
                                            href="https://www.notion.so/help/import-data-into-notion#workflowy"
                                            target="_blank" rel="noopener noreferrer"
                                            style="display: block; text-decoration: none; user-select: none; cursor: pointer; color: inherit; margin-left: auto;">
                                            <div style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 3px; height: 24px; width: 24px; padding: 0px;"
                                                class="notion-focusable" role="button" tabindex="0"><svg
                                                    viewBox="0 0 16 16"
                                                    style="width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0; backface-visibility: hidden;"
                                                    class="help">
                                                    <path
                                                        d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.667 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.84277 9.4248C8.21875 9.4248 8.45801 9.21289 8.47852 8.93262C8.47852 8.90527 8.47852 8.87109 8.47852 8.85059C8.49902 8.49512 8.74512 8.25586 9.18945 7.96875C9.85938 7.52441 10.2969 7.13477 10.2969 6.3418C10.2969 5.2002 9.27148 4.55078 8.06152 4.55078C6.89258 4.55078 6.09277 5.08398 5.88086 5.72656C5.83984 5.84277 5.81934 5.95898 5.81934 6.08203C5.81934 6.41016 6.0791 6.61523 6.35254 6.61523C6.60547 6.61523 6.76953 6.5127 6.90625 6.32812L7.01562 6.19141C7.24121 5.81543 7.56934 5.61719 7.97949 5.61719C8.5332 5.61719 8.90918 5.94531 8.90918 6.41016C8.90918 6.84082 8.62207 7.05273 8.04102 7.45605C7.55566 7.79102 7.2002 8.14648 7.2002 8.76855V8.84375C7.2002 9.22656 7.43262 9.4248 7.84277 9.4248ZM7.83594 11.5234C8.27344 11.5234 8.63574 11.2021 8.63574 10.7715C8.63574 10.3408 8.27344 10.0264 7.83594 10.0264C7.3916 10.0264 7.03613 10.3477 7.03613 10.7715C7.03613 11.2021 7.39844 11.5234 7.83594 11.5234Z">
                                                    </path>
                                                </svg></div>
                                        </a></div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
}