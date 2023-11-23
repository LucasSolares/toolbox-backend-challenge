import csvtojson from 'csvtojson'

import toolboxApi from '../configs/toolbox-api.js'

const parseFile = async ({ file, data }) => {
  let lines = await csvtojson({
    ignoreEmpty: true,
    ignoreColumns: /file/,
  }).fromString(data)

  lines = lines.filter((line) => Object.keys(line).length === 3)

  return {
    file,
    lines,
  }
}

const fetchByNames = (fileNames) =>
  Promise.all(
    fileNames.map(async (fileName) => {
      try {
        const { data } = await toolboxApi.get(`/file/${fileName}`)
        return { file: fileName, data }
      } catch {
        console.error(`There was an error downloading the file ${fileName}`)
      }
    })
  )

const parseFiles = async (files) => Promise.all(files.map(parseFile))

export const fetchFilesList = async () => {
  const { data } = await toolboxApi.get('/files')
  return data
}

export const findAndFetchByName = async (regexFileName) => {
  const { files } = await fetchFilesList()

  const foundFileNames = files.filter((fileName) =>
    fileName.includes(regexFileName)
  )

  if (foundFileNames.length) {
    const results = await fetchByNames(foundFileNames)
    const parsedFiles = await parseFiles(results.filter(Boolean))

    return parsedFiles
  }

  return []
}

export const fetchFiles = async () => {
  const { files } = await fetchFilesList()

  const results = await fetchByNames(files)
  const parsedFiles = await parseFiles(results.filter(Boolean))

  return parsedFiles
}
