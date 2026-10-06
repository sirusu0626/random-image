// 同じ確率で画像をランダムに1枚選びます
const images = [
  "images/73852.jpg",
  "images/73899.jpg",
  "images/73900.jpg",
  "images/73901.jpg",
  "images/73902.jpg",
  "images/73903.jpg",
  "images/73904.jpg"
];

function drawRandomImage() {
  const index = Math.floor(Math.random() * images.length);
  return images[index];
}
