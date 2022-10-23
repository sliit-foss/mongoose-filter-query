const mongooseFilterQuery = (req, res, next) => {
  if (req.query.filter) {
    Object.keys(req.query.filter).forEach((key) => {
      // TODO: implement logic
    })
  }
  if (req.query.sort) {
    Object.keys(req.query.sort).forEach((key) => {
      const dir = req.query.sort[key]
      if (dir === '1' || dir === '-1') {
        req.query.sort[key] = parseInt(dir)
      }
    })
  }
  next();
}

export default mongooseFilterQuery