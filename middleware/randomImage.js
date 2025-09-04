const randomImages = [
  "images/random/AccessingQualImg.jpg",
  "images/random/3rdImgMarine.jpg",
  "images/random/AccordionImg1.jpeg",
  "images/random/addressaImg.jpg",
  "images/random/Asaba-StormwaterProject.jpg",
  "images/random/addressPollutImg.jpg",
  "images/random/almostSewer.JPG",
  "images/random/altImg.jpg",
  "images/random/archive4Img.jpeg",
  "images/random/AsabaStormwater.jpg",
  "images/random/BasinImg.jpg",
  "images/random/beautifulHome.png",
  "images/random/besImg1.jpg",
  "images/random/besImg2.jpg",
  "images/random/besImg3.jpg",
  "images/random/BestConcreteImage.jpg",
  "images/random/blockedGutter.JPG",
  "public/random/images/blogImg.jpg",
  "images/random/bridgeConst.JPG",
  "images/random/buildComplete.JPG",
  "images/random/canoeImg.jpg",
  "images/random/CHAiMG.png",
  "images/random/chalposeImg.jpg",
  "images/random/challengeStomImg.jpg",
  "images/random/ChannelSelImg.jpg",
  "images/random/cobblestone.JPG",
  "images/random/chanImg3.jpg",
  "images/random/chanImg7.jpg",
  "images/random/drainag.JPG",
  "images/random/DescCorImg.jpg",
  "images/random/EXISTiMG.jpg",
  "images/random/prevent3Img.jpg",
  "images/random/preventImg.jpg",
  "images/random/preventimg2.jpg",
  "images/random/preventImg4.jpg",
  "images/random/preventImg5.jpg",
  "images/random/preventImg6.png",
  "images/random/preventImg8.jpg",
  "images/random/preventIMg7.jpg",
  "images/random/preventImg9.jpg",
  "images/random/preventImg10.jpg",
  "images/random/preventImg11.jpg",
];

function withRandomImage(req, res, next) {
  res.locals.showRandomImage = true;
  res.locals.randomImage =
    randomImages[Math.floor(Math.random() * randomImages.length)];
  next();
}

module.exports = withRandomImage;
