const { History } = require('../models')
const axios = require('axios');
require('dotenv').config()

exports.getNft = async (req, res) => {
    try {
        const data = await History.findAll();
        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(500).json({
            err: error
        })
    }
};

exports.createNft = async (req, res) => {

    const userId = 1;
    const imageURL = req.body.imageURL;
    const wallet = req.body.wallet;
    const options = {
        method: 'POST',
        url: 'https://api.nftport.xyz/v0/mints/easy/urls',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: process.env.NFT_PORT_API_KEY
        },
        data: {
            chain: 'polygon',
            name: 'Sample NFT',
            description: 'Build with NFTPort!',
            file_url: imageURL,
            mint_to_address: wallet
        }
    };

    createHistory = async (nft) => {
        try {

            console.log(nft);
            const data = await History.create({
                chain: nft.chain,
                name: nft.name,
                thash: nft.transaction_hash,
                description: nft.description
            })
            res.status(200).json({
                status: true,
                api: nft,
                data: data
            })
        } catch (error) {
            res.status(500).json({
                status: "DB Error",
                err: error
            })
            console.error(error);
        }
    };


    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            createHistory(response.data);
            return response.data
        })
        .catch(function (error) {
            console.error(error);
        });



};

