export default class WindowLocationObserver {

    lastPathname: string;

    observe(callback: any) {

        const didLocationChange = window.location.pathname !== this.lastPathname;

        this.lastPathname = window.location.pathname;

        if (didLocationChange) callback()
    }
    startObserving(callback: any) { setInterval(this.observe, 50, callback) }
}