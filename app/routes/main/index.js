export const index = async (req, res) => {
  // Load in the contents of the index.md file which lives in the same directory as this file
  return res.render('main/index', req.templateValues)
}
