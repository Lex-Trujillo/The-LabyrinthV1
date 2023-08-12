import * as sanity from './sanityFuncs.js';

sanity.setMaxSanity(100);
sanity.changeMaxSanity(25);

sanity.setCurrentSanity(sanity.getMaxSanity());
sanity.changeCurrentSanity(-25);

console.log(sanity.getCurrentSanity());
console.log(sanity.getMaxSanity());
console.log(sanity.getSanityPercent() + '%');