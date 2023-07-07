// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { products } from "../../index";

/**
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
export default function handler(req, res) {
    const {productId} = req.query;
    const product = products.find(p => p.id === productId); // IProduct | undefined
    if (!product) {
        res.status(404).json({});
        return ;
    }
    /**
     * @param {Object} IcartProduct 
     * @param {string} IcartProduct.id
     * @param {string} IcartProduct.name
     * @param {number} IcartProduct.price
     * @param {string} IcartProduct.url
     * @param {string} IcartProduct.description
     * @param {string} IcartProduct.image
     */
    const cartProduct  = {...product, image: product?.image.src ?? ""} 

    res.status(200).json(cartProduct);
}