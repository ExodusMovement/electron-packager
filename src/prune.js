'use strict'

const common = require('./common')
const fs = require('fs-extra')
const path = require('path')

const ELECTRON_MODULES = [
  'electron',
  'electron-nightly',
  'electron-prebuilt',
  'electron-prebuilt-compile'
]

class Pruner {
  constructor (dir) {
    throw new Error('Pruning is disabled in this version')
  }
}
module.exports = {
  isModule: async function isModule (pathToCheck) {
    throw new Error('Pruning is disabled in this version')
  },
  Pruner: Pruner
}
