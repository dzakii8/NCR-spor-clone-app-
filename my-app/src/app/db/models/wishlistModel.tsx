import { getCollection } from "../config/mongodb";
import { z } from "zod";
import { ObjectId } from "mongodb";

const AddWishlistSchema = z.object({
  userId: z.string(),
  productId: z.string()
})

export class WishlistModel {

  static collection() {
    return getCollection('wishlist')
  }

  static async getAllWishlist(_id:string) {
    return this.collection().aggregate(
      [
        {
          '$match': {
            'userId': new ObjectId(_id)
          }
        }, {
          '$lookup': {
            'from': 'products',
            'localField': 'productId',
            'foreignField': '_id',
            'as': 'product'
          }
        }, {
          '$unwind': {
            'path': '$product'
          }
        }
      ]
    ).toArray()
  }

  static async addWishlist(data: any) {
      const find = await this.collection().find({
        productId: new ObjectId(data?.productId)
      }, {
        userId: new ObjectId(data?.userId)
      }).toArray()
      
      if (!find.length) {
        const validation = AddWishlistSchema.safeParse(data)
        if (!validation.success) {
          throw validation.error
        }

        const result = await this.collection().insertOne({
          userId: new ObjectId(data.userId),
          productId: new ObjectId(data.productId),
        })
        return result
      } 
  }

  static async deleteWishlist(data: any) {
    // console.log(data,42452);
    const find = await this.collection().deleteOne({
      _id: new ObjectId(data)
    })
  }
}
