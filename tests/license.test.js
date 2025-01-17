const licenses = require('../exports/licenses')

describe('test `license` export', () => {

  test('test dummy node_modules and expect a specific set of outputs that have been JSON.stringified', () => {
    const actual = licenses('./tests')

    expect(actual).toEqual(
      {
        "MIT": {
          "packages": {
            "@babel/code-frame": "7.5.5",
            "chalk": "2.4.2",
            "color-convert": "1.9.3",
            "color-name": "1.1.3",
            "conformance": "1.0.0",
            "deep-is": "0.1.3",
            "error-ex": "1.3.2",
            "escape-string-regexp": "1.0.5",
            "has-flag": "3.0.0",
            "is-arrayish": "0.2.1",
            "js-tokens": "4.0.0",
            "json-parse-better-errors": "1.0.2",
            "lines-and-columns": "1.1.6",
            "load-json-file": "6.2.0",
            "parse-json": "5.0.0",
            "querystring": "0.2.0",
            "spdx-expression-parse": "3.0.0",
            "strip-bom": "4.0.0",
            "supports-color": "5.5.0"
          },
          "paths": {
            "@babel/code-frame": "tests/node_modules/@babel/code-frame/package.json",
            "chalk": "tests/node_modules/chalk/package.json",
            "color-convert": "tests/node_modules/color-convert/package.json",
            "color-name": "tests/node_modules/color-name/package.json",
            "conformance": "tests/node_modules/conformance/package.json",
            "deep-is": "tests/node_modules/deep-is/package.json",
            "error-ex": "tests/node_modules/error-ex/package.json",
            "escape-string-regexp": "tests/node_modules/escape-string-regexp/package.json",
            "has-flag": "tests/node_modules/has-flag/package.json",
            "is-arrayish": "tests/node_modules/is-arrayish/package.json",
            "js-tokens": "tests/node_modules/js-tokens/package.json",
            "json-parse-better-errors": "tests/node_modules/json-parse-better-errors/package.json",
            "lines-and-columns": "tests/node_modules/lines-and-columns/package.json",
            "load-json-file": "tests/node_modules/load-json-file/package.json",
            "parse-json": "tests/node_modules/parse-json/package.json",
            "querystring": "tests/node_modules/querystring/package.json",
            "spdx-expression-parse": "tests/node_modules/spdx-expression-parse/package.json",
            "strip-bom": "tests/node_modules/strip-bom/package.json",
            "supports-color": "tests/node_modules/supports-color/package.json"
          },
          "conformance": {
            "uniqueLicenseIds": [
              "MIT"
            ],
            "spdxLicenseLinks": [
              "https://spdx.org/licenses/MIT.html#licenseText"
            ],
            "spdx": {
              "osi": true,
              "fsf": true,
              "fsfAndOsi": true,
              "includesDeprecated": false
            }
          },
          "occurrences": 19
        },
        "BSD": {
          "packages": {
            "esutils": "2.0.2"
          },
          "paths": {
            "esutils": "tests/node_modules/esutils/package.json"
          },
          "conformance": {
            "license": "BSD",
            "error": "Passed license expression was not a valid license expression. Error from spdx-expression-parse: Error: Unexpected `B` at offset 0"
          },
          "occurrences": 1
        },
        "invalid license": {
          "packages": {
            "fakefail": "0.2.0"
          },
          "paths": {
            "fakefail": "tests/node_modules/fakefail/package.json"
          },
          "conformance": {
            "license": "invalid license",
            "error": "Passed license expression was not a valid license expression. Error from spdx-expression-parse: Error: Unexpected `i` at offset 0"
          },
          "occurrences": 1
        },
        "ISC": {
          "packages": {
            "graceful-fs": "4.2.0"
          },
          "paths": {
            "graceful-fs": "tests/node_modules/graceful-fs/package.json"
          },
          "conformance": {
            "uniqueLicenseIds": [
              "ISC"
            ],
            "spdxLicenseLinks": [
              "https://spdx.org/licenses/ISC.html#licenseText"
            ],
            "spdx": {
              "osi": true,
              "fsf": true,
              "fsfAndOsi": true,
              "includesDeprecated": false
            }
          },
          "occurrences": 1
        },
        "CC-BY-3.0": {
          "packages": {
            "spdx-exceptions": "2.2.0"
          },
          "paths": {
            "spdx-exceptions": "tests/node_modules/spdx-exceptions/package.json"
          },
          "conformance": {
            "uniqueLicenseIds": [
              "CC-BY-3.0"
            ],
            "spdxLicenseLinks": [
              "https://spdx.org/licenses/CC-BY-3.0.html#licenseText"
            ],
            "spdx": {
              "osi": false,
              "fsf": false,
              "fsfAndOsi": false,
              "includesDeprecated": false
            }
          },
          "occurrences": 1
        },
        "CC0-1.0": {
          "packages": {
            "spdx-license-ids": "3.0.5"
          },
          "paths": {
            "spdx-license-ids": "tests/node_modules/spdx-license-ids/package.json"
          },
          "conformance": {
            "uniqueLicenseIds": [
              "CC0-1.0"
            ],
            "spdxLicenseLinks": [
              "https://spdx.org/licenses/CC0-1.0.html#licenseText"
            ],
            "spdx": {
              "osi": false,
              "fsf": true,
              "fsfAndOsi": false,
              "includesDeprecated": false
            }
          },
          "occurrences": 1
        },
        "(MIT OR CC0-1.0)": {
          "packages": {
            "type-fest": "0.6.0"
          },
          "paths": {
            "type-fest": "tests/node_modules/type-fest/package.json"
          },
          "conformance": {
            "uniqueLicenseIds": [
              "MIT",
              "CC0-1.0"
            ],
            "spdxLicenseLinks": [
              "https://spdx.org/licenses/MIT.html#licenseText",
              "https://spdx.org/licenses/CC0-1.0.html#licenseText"
            ],
            "spdx": {
              "osi": false,
              "fsf": true,
              "fsfAndOsi": false,
              "includesDeprecated": false
            }
          },
          "occurrences": 1
        }
      }
    )
  })
})
