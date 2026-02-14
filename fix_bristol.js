const sharp = require('sharp');
async function main(){
  await sharp('public/sponsors-2022-2023/bristol.webp')
    .resize(400, 200, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .webp({ lossless: false, quality: 85 })
    .toFile('public/sponsors-2022-2023/bristol-fixed.webp');
  await sharp('public/sponsors-2021-2022/bristol.webp')
    .resize(400, 200, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .webp({ lossless: false, quality: 85 })
    .toFile('public/sponsors-2021-2022/bristol-fixed.webp');
}
main().catch(err=>{console.error(err);process.exit(1);});
