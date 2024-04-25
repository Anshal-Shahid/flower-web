const asyncHandler=require("express-async-handler")

const flower=asyncHandler( async(req,res)=>{

    const flower =req.params.flowers
    const data={
        "red-rose":{
            name: "Classic Red Rose",
            para:" The Red Rose is a classic symbol of love and romance. Its vibrant red petals convey deep emotions and passion, making it a popular choice for expressing affection and admiration. Beyond its romantic associations, the Red Rose also symbolizes beauty, courage, and respect. With its timeless allure and rich cultural significance, the Red Rose continues to captivate hearts and inspire sentiments of love and devotion around the world.",
            img:"red-rose",
            heading: "Red Rose"
        },
        "orange-rose":{
            name: "Vibrant Tulips",
            para:"Orange roses are a delightful fusion of passion and vitality, embodying the zest for life and the excitement of new beginnings. Known for their vivacious charm and spirited personality, these blossoms symbolize the joy of shared moments and the thrill of new discoveries. Their vibrant blooms capture the essence of sun-kissed days and warm summer evenings, infusing every space with a sense of adventure and possibility. Whether adorning a wedding bouquet or brightening a dining table, orange roses radiate a sense of warmth and hospitality, inviting smiles and fostering connections among friends and loved ones.",
            img:"img-4",
            heading: "Orange Rose"
        },
        "tulip":{
            name: "Classic Orange Rose",
            para:"Red Yellow Tulips are symbolic of a harmonious blend of emotions. The fiery red petals represent passion, love, and desire, while the sunny yellow accents symbolize happiness, warmth, and optimism. Together, these colors evoke a sense of vitality, energy, and excitement, making Red Yellow Tulips a perfect choice for expressing a range of sentiments.Red Yellow Tulips stand as a vibrant testament to the beauty of contrast, intertwining fiery passion with sunny optimism to create a bouquet that exudes both warmth and vitality. Their striking appearance and dynamic energy make them an irresistible choice for adding a splash of color to any floral arrangement.",
            img:"img-1",
            heading: "Red Yellow Tulip"
        },
        "rose-white":{
            name: "White Rose Haven",
            para:"Rose White symbolizes purity, innocence, and reverence, making it a beloved choice for weddings, baptisms, and other sacred ceremonies. Its pristine petals convey a sense of serenity and tranquility, evoking feelings of peace and harmony. Rose White is a classic choice for a variety of special occasions, from weddings and anniversaries to graduations and memorials. Its timeless beauty and symbolic meaning make it a versatile flower that can convey a range of emotions and sentiments with grace and elegance.",
            img:"about-2",
            heading: "Rose White"
        },
        "dahilas":{
            name: "Elegant Dahlia Blooms",
            para:"Dahlias captivate the eye with their kaleidoscope of colors, ranging from vibrant reds and oranges to soft pastels and creamy whites. Their intricate petal formations, ranging from delicate pompons to dramatic dinner plates, add a touch of elegance and sophistication to any floral arrangement.In full bloom, dahlias create a spectacular display of color and texture, transforming gardens, bouquets, and floral designs into works of art. Their long-lasting blooms make them a versatile choice for everything from garden borders and floral centerpieces to bridal bouquets and special event decor.",
            img:"about-3",
            heading: "Dahilas Bulb"
        },
    } 
    
    const name=data[flower].name;
    const para=data[flower].para;
    const img=data[flower].img;
    const heading=data[flower].heading;
    
    const output={
        name,
        para,
        img,
        heading
    } 



    res.render("flower.ejs",output )
})



module.exports={flower}