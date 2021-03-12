const handleError = (err, req, res, next) => {
  switch (err.name) {
    case 'SequelizeValidationError':
      const errors = err.errors.map(el => el.message)

      res.status(400).json({ errors })
      break;
    case 'notFound':
      res.status(404).json({ errors: 'not found' })
      break;

    default:
      res.status(500).json({ errors: err.message })
      break;
  }
}

module.exports = handleError