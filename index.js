const displayNameMappings = require('./data/displayName')
const idMappings = require('./data/id')
const nameMappings = require('./data/name')
const imageMappings = require('./data/images')
const joinImages = require('join-images')

module.exports.getBlockImageID = async function getBlockImageID (ids = []) {
  const imgList = []
  ids.forEach((element) => {
    try {
      imgList.push(Buffer.from(imageMappings[element].image.split(';base64,').pop(), 'base64'))
    } catch {
      throw new Error('Invalid Block ID present')
    }
  })
  const bufferimg = await (await joinImages.joinImages(imgList, { direction: 'vertical' })).png().toBuffer()
  return ('data:image/png;base64,' + bufferimg.toString('base64'))
}

module.exports.isValidBlockID = function isValidBlockID (id) {
  if (idMappings[id]) return true
  else return false
}

module.exports.isValidBlockName = function isValidBlockName (name) {
  if (nameMappings[name]) return true
  else return false
}

module.exports.isValidBlockDisplayName = function isValidBlockDisplayName (displayName) {
  if (displayNameMappings[displayName]) return true
  else return false
}

module.exports.getBlockInfoFromIDs = async function getBlockInfoFromIDs (ids = []) {
  const exportList = []
  ids.forEach((element) => {
    if (idMappings[element]) exportList.push(idMappings[element])
    else throw new Error('Invalid Block ID present')
  })

  return exportList
}

module.exports.getBlockInfoFromNames = async function getBlockInfoFromNames (names = []) {
  const exportList = []
  names.forEach((element) => {
    if (nameMappings[element]) exportList.push(nameMappings[element])
    else throw new Error('Invalid Block Name present')
  })

  return exportList
}

module.exports.getBlockInfoFromDisplayNames = async function getBlockInfoFromDisplayNames (displayNames = []) {
  const exportList = []
  displayNames.forEach((element) => {
    if (displayNameMappings[element]) exportList.push(displayNameMappings[element])
    else throw new Error('Invalid Block Display Name present')
  })

  return exportList
}
