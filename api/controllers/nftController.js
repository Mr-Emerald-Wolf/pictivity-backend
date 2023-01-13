const axios = require('axios');
require('dotenv').config()

exports.createNft = async (req, res) => {

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
    axios
        .request(options)
        .then(function (response) {
            res.status(200).json({
                status: true,
                data: response.data
            })
            console.log(response.data);
        })
        .catch(function (error) {
            res.status(400).json({
                status:false,
                err: error
            })
            console.error(error);
        });
};