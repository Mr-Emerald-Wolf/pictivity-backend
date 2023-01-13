const { Configuration, OpenAIApi } = require("openai");

exports.getImage = async (req, res) => {
    try {
        const images = 10;
        res.status(200).json({
            status: true,
            data: images
        })
    }
    catch (err) {
        res.send({
            status: false,
            message: err 
        })
    }
};
exports.createImage = async (req, res) => {

    const prompt = req.body.prompt;
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {

        const openai = new OpenAIApi(configuration);
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "256x256",
        });

        image_url = response.data.data[0].url;
        res.status(200).json({
            status: true,
            data: image_url
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            err: error
        })
    }
};