// productsData.js
import tv32 from "../assets/tvs/32.png";
import tv43_4k from "../assets/tvs/43-4k.png";
import tv43 from "../assets/tvs/43-full-hd.png";

const products = [
  {
    id: 1,
    size: '32"',
    resolution: "HD (1366×768)",
    os: "WildRed",
    voiceControl: false,
    brightness: "220 кд/м²",
    contrast: "1100:1",
    image: tv32,
  },
  {
    id: 2,
    size: '43" (FHD)',
    resolution: "Full HD (1980×1080)",
    os: "WildRed",
    voiceControl: true,
    brightness: "275 кд/м²",
    contrast: "1100:1",
    image: tv43,
  },
  {
    id: 3,
    size: '43" (4K)',
    resolution: "UHD (3840×2160)",
    os: "Web OS LG",
    voiceControl: true,
    brightness: "350 кд/м²",
    contrast: "1100:1",
    image: tv43_4k,
  },
  {
    id: 4,
    size: '50", 55", 65"',
    resolution: "UHD",
    os: "Web OS LG",
    voiceControl: true,
    brightness: "250–280 кд/м²",
    contrast: "1200:1",
    image: tv43_4k,
  },
];

export default products;
