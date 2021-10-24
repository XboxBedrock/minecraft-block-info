const displayNameMappings = require('./data/displayName')
const idMappings = require('./data/id')
const nameMappings = require('./data/name')
const imageMappings = require('./data/images')
const joinImages = require('join-images')
const mergedMappings = { ...displayNameMappings, ...nameMappings, ...idMappings }
const listedValues = Object.values(idMappings).map(el => el)
const stringSimilarity = require('string-similarity')

function idCompare (id, query) {
  id = id.toString()
  if (!Number.isInteger(Number(query.replace(':', '')))) return 0
  else if (query === id) return 1
  else if (id.split(':')[0] === query.split(':')[0]) return 0.6
  else if (query.includes(':') && id.includes(':')) { if (id.includes(query)) return 0.7 } else if (query.includes(':') && !id.includes(':')) { if (id.split(':')[0].includes(query)) return 0.4 } else if (!query.includes(':') && id.includes(':')) { if (id.split(':')[0].includes(query)) return 0.5 } else if (id.split(':')[0].includes(query)) { return 0.3 } else return 0
}
module.exports.getBlockImageID = async function getBlockImageID (ids = []) {
  const imgList = []
  ids.forEach((element) => {
    try {
      imgList.push(Buffer.from(imageMappings[element].image.split(';base64,').pop(), 'base64'))
    } catch {
      throw new Error('Invalid Block ID present')
    }
  })
  if (imgList.length === 1) return ('data:image/png;base64,' + imgList[0].toString('base64'))
  if (imgList.length === 0) return ''
  const bufferimg = await (await joinImages.joinImages(imgList, { direction: 'vertical' })).png().toBuffer()
  return ('data:image/png;base64,' + bufferimg.toString('base64'))
}

module.exports.getBlockImageObject = async function getBlockImageID (objects = []) {
  const imgList = []
  objects.forEach((element) => {
    if (imageMappings[element.id]) imgList.push(Buffer.from(imageMappings[element.id].image.split(';base64,').pop(), 'base64'))
  })
  if (imgList.length === 1) return ('data:image/png;base64,' + imgList[0].toString('base64'))
  if (imgList.length === 0) return ''
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

  return [...new Set(exportList)]
}

module.exports.getBlockInfoFromNames = async function getBlockInfoFromNames (names = []) {
  const exportList = []
  names.forEach((element) => {
    if (nameMappings[element]) exportList.push(nameMappings[element])
    else throw new Error('Invalid Block Name present')
  })

  return [...new Set(exportList)]
}

module.exports.getBlockInfoFromDisplayNames = async function getBlockInfoFromDisplayNames (displayNames = []) {
  const exportList = []
  displayNames.forEach((element) => {
    if (displayNameMappings[element]) exportList.push(displayNameMappings[element])
    else throw new Error('Invalid Block Display Name present')
  })

  return [...new Set(exportList)]
}

module.exports.searchAbsolute = async function searchAbsolute (queryList = []) {
  const exportList = []
  queryList.forEach((element) => {
    if (mergedMappings[element]) exportList.push(mergedMappings[element])
  })

  return [...new Set(exportList)]
}

module.exports.search = async function search (query) {
  let exportList = []
  listedValues.forEach((element) => {
    if (element.displayName.includes(query)) exportList.push(element)
    else if (element.name.includes(query)) exportList.push(element)
    else if (element.id.toString().includes(query)) exportList.push(element)
  })

  exportList = [...new Set(exportList)].sort((firstEl, secondEl) => {
    if ((idCompare(firstEl.id.toString(), query) + stringSimilarity.compareTwoStrings(firstEl.name, query) + stringSimilarity.compareTwoStrings(firstEl.displayName, query)) > (idCompare(secondEl.id.toString(), query) + stringSimilarity.compareTwoStrings(secondEl.name, query) + stringSimilarity.compareTwoStrings(secondEl.displayName, query))) return -1
    else if ((idCompare(firstEl.id.toString(), query) + stringSimilarity.compareTwoStrings(firstEl.name, query) + stringSimilarity.compareTwoStrings(firstEl.displayName, query)) < (idCompare(secondEl.id.toString(), query) + stringSimilarity.compareTwoStrings(secondEl.name, query) + stringSimilarity.compareTwoStrings(secondEl.displayName, query))) return 1
    else return 0
  })

  return exportList
}
