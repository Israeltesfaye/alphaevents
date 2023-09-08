const { UploadClient }=require('@uploadcare/upload-client')
fs=require("fs")
fileData=fs.readFileSync("WIN_20230907_17_20_01_Pro.jpg")
const client = new UploadClient({ publicKey: '569fea34877cd8f7543d' })
client
  .uploadFile(fileData)
  .then(file => console.log(file))