import {
  fetchFilesList,
  fetchFiles,
  findAndFetchByName
} from '../services/files.js'

export const getFilesList = async (_, res) => {
  const data = await fetchFilesList()
  res.status(200).json(data)
}

export const getFiles = async (req, res) => {
  let data

  if (req.query?.fileName) {
    data = await findAndFetchByName(req.query.fileName)
    return res.status(200).send(data)
  }

  data = await fetchFiles()
  res.status(200).send(data)
}
