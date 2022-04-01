const { User, Product } = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
  Query: {
    products: async () => {
      return Product.find({});
    },
    product: async (parent, { _id }) => {
  
      const product = await Product.findById(_id);
      return product
    },
  },
  Mutation: {
    createProduct: async (parent, args) => {
      const product = await Product.create(args);
      return product;
    },
    createUser: async (parent, args) => {
    	const user = await User.create(args);
		const token = signToken(user);
      return {token, user};
    },
  },
};

module.exports = resolvers;
