export default function handler(req, res) {
    //get the tokenId from the query params
    const tokenId = req,query.tokenId;
    //extracting all the images asa they are on github 
    const image_url =
    "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/";
    //api sends raw metadata for a crypto dev
    //following metadata standards to be compatible with nfts 
    res.status(200).json({
        name: "Crypto Dev #" + tokenId,
        description: "Crypto Devs is a collection of developers in crypto",
        image: image_url + tokenId + ".svg",
    });
}