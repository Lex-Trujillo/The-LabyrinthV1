import * as health from './healthFuncs.js';

health.setMaxHealth(100);
health.changeMaxHealth(25);

health.setCurrentHealth(health.getMaxHealth());
health.changeCurrentHealth(-25);

console.log(health.getCurrentHealth());
console.log(health.getMaxHealth());
console.log(health.getHealthPercent() + '%');