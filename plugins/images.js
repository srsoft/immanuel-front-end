export default (context, inject) => {
  const images = (img, type) => {
    let t = '-cropperd'
    if (type !== undefined) {
      t = '-' + type
    }
    if (type === 'org') {
      t = ''
    }
    const imgName = img.split('.')
    return context.env.imageUrl + imgName[0] + t + '.' + imgName[1]
  }
  inject('images', images)
  context.$images = images
}

// "http://172.30.1.15:8003/storage/clients/January2022/CbUqZp7qcs7GF3ra95c2-small.jpeg"
// "http://172.30.1.15:8003/storage/clients/January2022/d5bN4sKjZTnOF3vUhtMW-small.jpeg"

// export default (context, inject) => {
//   const images = (img, type) => {
//     let t = '-cropperd'
//     if (type !== undefined) {
//       t = '-' + type
//     }
//     if (type === 'org') {
//       t = ''
//     }
//     const imgName = img.split('.')
//     return context.env.imageUrl + imgName[0] + t + '.' + imgName[1]
//   }

//   inject('images', images)

//   context.$images = images
// }
