const { Product } = require('../models');

class productController {
  static async getAll(req, res, next) {
    try {
      const products = await Product.findAll();
      return res.status(200).json(products)
    } catch (error) {
      return next(error)
    }
  }

  static async getOne(req, res, next) {
    try {
      const { id } = req.params
      const product = await Product.findByPk(id);
      if (!product) return next({ name: 'notFound' });

      return res.status(200).json(product);

    } catch (error) {
      return next(error);
    }
  }

  static async store(req, res, next) {
    try {
      const { name, price, stock, imageUrl, description } = req.body;
      const input = { name, price, stock, imageUrl, description };
      const createProduct = await Product.create(input);

      return res.status(201).json(createProduct);
    } catch (error) {
      return next(error)
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name, price, stock, imageUrl, description } = req.body;
      const input = { name, price, stock, imageUrl, description };

      const product = await Product.findByPk(id);
      if (!product) return next({ name: 'notFound' });

      await product.update(input, { where: id });
      await product.reload();

      return res.status(200).json(product);
    } catch (error) {
      return next(error);
    }
  }

  static async destroy(req, res, next) {
    try {
      const { id } = req.params;

      const product = await Product.findByPk(id);
      if (!product) return next({ name: 'notFound' });

      await product.destroy();

      return res.status(200).json(product);
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = productController;