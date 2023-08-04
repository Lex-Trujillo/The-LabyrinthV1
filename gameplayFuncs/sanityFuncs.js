/*
This file contains all functions pertaining to the Sanity stat.
Start date: 8/3/2023
Last edit:  8/3/2023
Author(s): Noah Wishnia
Version: 1.0.0
 */

let currentSanity;
let maxSanity;

///////////CURRENT SANITY///////////
//Sets the current sanity variable to its initial value
// ***Should be used at beginning of game after max sanity has been established***

export function setCurrentSanity(sanityValue)
{
    currentSanity = sanityValue;
}

//Returns the current sanity of the player
export function getCurrentSanity()
{
    return currentSanity;
}

//Modifies the current sanity stat equal to the change input
// ***Sensitive to signs, use negative input to lose, positive to increase
export function changeCurrentSanity(sanityChange)
{
 currentSanity = currentSanity + sanityChange;
}

///////////MAX SANITY///////////

//Sets the max sanity variable to its initial value
// ***Should be used at beginning of game with character base sanity value***
export function setMaxSanity(sanityValue)
{
    maxSanity = sanityValue;
}

//Returns the max sanity of the player
export function getMaxSanity()
{
    return maxSanity;
}

//Modifies the max sanity stat equal to the change input
// ***Sensitive to signs, use negative input to lose, positive to increase
export function changeMaxSanity(sanityChange)
{
 maxSanity = maxSanity + sanityChange;
}

///////////EXTRA///////////

export function getSanityPercent()
{
    let sanityPercent = (currentSanity / maxSanity) * 100 % 100;
    return sanityPercent;
}