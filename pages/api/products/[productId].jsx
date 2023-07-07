// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../components/Product";
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
     * @param {Object} ISnipcartProduct 
     * @param {string} ISnipcartProduct.id
     * @param {string} ISnipcartProduct.name
     * @param {number} ISnipcartProduct.price
     * @param {string} ISnipcartProduct.url
     * @param {string} ISnipcartProduct.description
     * @param {string} ISnipcartProduct.image
     */
    const snipcartProduct  = {...product, image: product?.image.src ?? ""} 

    res.status(200).json(snipcartProduct);
}