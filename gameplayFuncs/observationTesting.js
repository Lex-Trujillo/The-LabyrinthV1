import * as observation from './observationFuncs.js';

observation.setMaxObservation(100);
observation.changeMaxObservation(25);

observation.setCurrentObservation(observation.getMaxObservation());
observation.changeCurrentObservation(-25);

console.log(observation.getCurrentObservation());
console.log(observation.getMaxObservation());
console.log(observation.getObservationPercent() + '%');