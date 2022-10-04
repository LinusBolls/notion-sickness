// src: https://stackoverflow.com/a/67551175
export default function toDataURL(blob: Blob | File): Promise<string> {
    return new Promise<string>((res, rej) => {
        const reader = new FileReader();

        reader.onload = () => res(reader.result as string);
        reader.onerror = () => rej(reader.error);
        reader.onabort = () => rej(new Error("read aborted"));

        reader.readAsDataURL(blob);
    });
}