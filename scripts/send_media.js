import config from "../config.json" assert {type: 'json'}

const sendDownloadRequest = async (url)=>{
    const bodyRequest = {
        url: url
    }
    await fetch(config["media-downloader-api-url"], {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyRequest)
    })
}
const sendMedia = (event) => {
    event.preventDefault()
    const urlInput = document.getElementById("urlInput")
    const mediaUrl = urlInput.value
    urlInput.value = ""
    sendDownloadRequest(mediaUrl)
}
document.getElementById("sendButton").addEventListener("click", sendMedia)

