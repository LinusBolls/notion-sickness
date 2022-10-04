import axios from "axios";

import assetStorage from "../assetStorage.service";
import toDataUrl from "../util/toDataUrl";

export default async function storeCoverImage(coverImgUrl: string | null) {

    if (coverImgUrl == null || assetStorage().hasAsset(coverImgUrl)) return

    try {
        const res = await axios.create({ timeout: 10000, }).get(coverImgUrl, { responseType: "arraybuffer" })

        const type = res.headers["content-type"]

        const blob = new Blob([res.data], { type })

        const dataUrl = await toDataUrl(blob)

        assetStorage().setAsset(coverImgUrl, dataUrl);

    } catch (err) {
        console.log("failed to fetch page cover image:", err)
    }
}