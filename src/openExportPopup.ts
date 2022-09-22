const closeOnclick = `onclick='document.querySelector(".notion-overlay-container.notion-default-overlay-container").innerHTML = ""'`

export default function openExportPopup(data: any) {

    const { files: { csv, xml, json } } = data;

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
                    Export</div><a href="https://www.notion.so/help/import-data-into-notion" target="_blank"
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
                        <a href="${json.url}" download="${json.name}">
                        <div style="user-select: none; transition: background 200ms ease-out 0s; cursor: pointer; display: flex; align-items: center; padding: 10px 8px 10px 10px; border-radius: 3px; margin-bottom: 12px; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px; background: white none repeat scroll 0% 0%;"
                            class="notion-focusable" role="button" tabindex="0">
                            <div
                                style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 3px; margin-right: 8px; color: rgba(55, 53, 47, 0.65); background: rgb(251, 251, 250) none repeat scroll 0% 0%;">
                                <svg viewBox="0 0 32 32"
                                    style="width: 28px; height: 28px; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;"
                                    class="importText">
                                    <path
                                        d="M6.3999,22.4 L19.1999,22.4 L19.1999,20.2667 L6.3999,20.2667 L6.3999,22.4 Z M6.3999,9.59999 L6.3999,11.7333 L25.5999,11.7333 L25.5999,9.59999 L6.3999,9.59999 Z M6.3999,17.0667 L25.5999,17.0667 L25.5999,14.9333 L6.3999,14.9333 L6.3999,17.0667 Z">
                                    </path>
                                </svg></div>
                            <div style="min-width: 0px; width: 100%;">
                                <div style="display: flex;">
                                    <div style="font-size: 16px; font-weight: 500;">JSON</div>
                                    <div style="margin-left: auto;"></div>
                                </div>
                            </div>
                        </div>
                        </a>
                        <a href="${csv.url}" download="${csv.name}">
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
                        <a href="${xml.url}" download="${xml.name}">
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