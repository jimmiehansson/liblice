const fs = require('fs')
const path = require('path')

/**
 * @function validPaths
 * @access public
 *
 * CLARIFY: Should return whether the mandatory list
 * of exclusions in the directories are present or not.
 *
 * @param {Iterable|List|*} paths - The list of paths available
 * @returns {*}
 */
const validPaths = (paths) => {
  if(!paths.includes('.bin')) return false
  if(!paths.includes('.git')) return false
  if(!paths.match(/(node_modules\/)(?:@([^/]+?)[/])?([^/]+?)(\/test)/g)) return false
  return true
}

/** Retrieve file paths from a given folder and its subfolders. */
const getFilePaths = (folderPath) => {
  if (validPaths(folderPath)) {
    const entryPaths = fs.readdirSync(folderPath).map(entry => path.join(folderPath, entry))
    const filePaths = entryPaths.filter(entryPath => fs.lstatSync(entryPath).isFile())
    const dirPaths = entryPaths.filter(entryPath => !filePaths.includes(entryPath))
    const dirFiles = dirPaths.reduce((prev, curr) => prev.concat(getFilePaths(curr)), [])
    return [...filePaths, ...dirFiles]
  }

  return []
}

module.exports = getFilePaths
