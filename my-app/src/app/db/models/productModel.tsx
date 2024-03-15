import { ProductType } from "../../types";
import { getCollection } from "../config/mongodb";


export class ProductModel {

  static collection() {
    return getCollection('products')
  }

  static async getProducts(search: string) {
    if (search) {
      const searchQuery = new RegExp(search, 'i')
      const productBySlug = this.collection().find({ slug: { '$regex': searchQuery } }).toArray()
      return productBySlug

    }
    const productBySlug = this.collection().find().toArray()
    return productBySlug
  }

  static async getProductSlug(slug: string) {
    const productBySlug = this.collection().findOne({ slug })
    return productBySlug
  }
}