export const Text = {

    DEFAULT: "Export Database",
    DOWNLOAD: "Export Database",
    CANNOT_EXPORT: "No Database Found",
}

export const Icon = {

    // color: rgb(46, 170, 220) = #2EAADC 

    DEFAULT: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.7143 4.87143L2.91429 6.07143L5.14286 3.78071L5.14286 9.92857H6.85714L6.85714 3.78071L9.08571 6.07143L10.2857 4.87143L6 0.5L1.7143 4.87143Z" fill="#37352F" fill-opacity="0.45"/><rect x="12" y="12.4286" width="12" height="1.71" transform="rotate(-180 12 12.4286)" fill="#37352F" fill-opacity="0.45"/></svg>`,
    WORKING: `<img class="loading-spinner" style="opacity: 0.5; width: 14px; height: 14px;" alt="Loading..." aria-busy="true" aria-live="polite" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20data-ember-extension%3D%221%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2228.1542969%25%22%20y1%3D%2263.7402344%25%22%20x2%3D%2274.6289062%25%22%20y2%3D%2217.7832031%25%22%20id%3D%22linearGradient-1%22%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22rgba(164%2C%20164%2C%20164%2C%200)%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20%3E%3Cg%20transform%3D%22translate(-236.000000%2C%20-286.000000)%22%3E%3Cg%20transform%3D%22translate(238.000000%2C%20286.000000)%22%3E%3Ccircle%20id%3D%22Oval-2%22%20stroke%3D%22url(%23linearGradient-1)%22%20stroke-width%3D%224%22%20cx%3D%2210%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M10%2C2%20C4.4771525%2C2%200%2C6.4771525%200%2C12%22%20id%3D%22Oval-2%22%20stroke%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20stroke-width%3D%224%22%2F%3E%3Crect%20id%3D%22Rectangle-1%22%20fill%3D%22rgba(164%2C%20164%2C%20164%2C%201)%22%20x%3D%228%22%20y%3D%220%22%20width%3D%224%22%20height%3D%224%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E">`,
    DOWNLOAD: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.7143 4.87143L2.91429 6.07143L5.14286 3.78071L5.14286 9.92857H6.85714L6.85714 3.78071L9.08571 6.07143L10.2857 4.87143L6 0.5L1.7143 4.87143Z" fill="#2EAADC"/><rect x="12" y="12.4286" width="12" height="1.71" transform="rotate(-180 12 12.4286)" fill="#2EAADC"/></svg>`,
    WARNING: `<svg style="color: rgba(55, 53, 47, 0.45)" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M15.040 12.512l-6.096-10.208c-0.432-0.72-1.472-0.784-1.92-0.080l-6.047 10.272c-0.48 0.752 0.064 1.905 0.959 1.905h12.128c0.88 0 1.424-1.136 0.976-1.888zM7.968 12.672c-0.432 0-0.784-0.351-0.784-0.784s0.351-0.784 0.784-0.784c0.432 0 0.784 0.351 0.784 0.784s-0.351 0.784-0.784 0.784zM8.8 9.792c0 0.432-0.368 0.784-0.8 0.784s-0.8-0.351-0.8-0.784v-4.097c0-0.432 0.368-0.784 0.8-0.784s0.8 0.351 0.8 0.784v4.097z"></path></svg>`,
}

const controlsParentSelector = ".notion-sidebar > div > div > div:nth-child(2)"

export const Selector = {

    CONTROLS_PARENT: controlsParentSelector,
    CONTROLS: controlsParentSelector + " .linus-controls",
    ICON: controlsParentSelector + " > :last-child > :first-child > :first-child",
}