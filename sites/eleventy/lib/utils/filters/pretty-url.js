/**
 * Removes (index).html from a string
 * @see https://www.w3.org/Provider/Style/URI.html
 *
 * @param {String} str URL, i.e. /page/index.html
 * @return {String} Permalinkable URL, i.e. /page/
 *
 */
module.exports = str => {
  const url = String(str)
  return url.replace(/(?:index)?\.html/g, '')
}
