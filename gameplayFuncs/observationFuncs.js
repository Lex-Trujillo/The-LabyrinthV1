/*
This file contains all functions pertaining to the Hit Point stat.
Start date: 8/8/2023
Last edit:  8/8/2023
Author(s): Noah Wishnia
Version: 1.0.0
 */

let currentObservation;
let maxObservation;

///////////CURRENT OBSERVATION///////////
//Sets the current observation variable to its initial value
// ***Should be used at beginning of game after max observation has been established***

export function setCurrentObservation(observationValue)
{
    currentObservation = observationValue;
}

//Returns the current observation of the player
export function getCurrentObservation()
{
    return currentObservation;
}

//Modifies the current observation stat equal to the change input
// ***Sensitive to signs, use negative input to lose, positive to increase
export function changeCurrentObservation(observationChange)
{
 currentObservation = currentObservation + observationChange;
}

///////////MAX OBSERVATION///////////

//Sets the max observation variable to its initial value
// ***Should be used at beginning of game with character base observation value***
export function setMaxObservation(observationValue)
{
    maxObservation = observationValue;
}

//Returns the max observation of the player
export function getMaxObservation()
{
    return maxObservation;
}

//Modifies the max observation stat equal to the change input
// ***Sensitive to signs, use negative input to lose, positive to increase
export function changeMaxObservation(observationChange)
{
 maxObservation = maxObservation + observationChange;
}

///////////EXTRA///////////

export function getObservationPercent()
{
    let observationPercent = (currentObservation / maxObservation) * 100 % 100;
    return observationPercent;
}