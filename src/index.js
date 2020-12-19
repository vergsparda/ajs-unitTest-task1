export default function  setColorLifebar(hero) {
  if (hero.health < 15){
   return `critical`;
  } 
  if (hero.health > 50) {
    return `healthy`;
  } 
  return  `wounded`;
}