/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
require("./src/styles/global.css")

const React = require("react")
const { Provider } = require("mobx-react")

const { Store } = require("./src/stores/Store")

const store = new Store()

exports.wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
