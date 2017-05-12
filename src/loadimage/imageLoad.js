import convertBase64UrlToBlob from '../common/convertToBlob'

function downLoad (urlData) {
  let aLink = document.createElement('a')
  let blob = convertBase64UrlToBlob(urlData)

  aLink.download = 'saveImg'
  aLink.href = URL.createObjectURL(blob)
  // console.log(aLink.href)
  aLink.click()
}

function upLoad (urlData, url) {
  let blob = convertBase64UrlToBlob(urlData)
  let fd = new FormData()

  fd.append('file', blob)
  console.log(fd.get('file'))
  // ....ajax
}

export default {
  downLoad: downLoad,
  upLoad: upLoad
}
