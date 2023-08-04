/*
This file contains all functions pertaining to the Hit Point stat.
Start date: 8/3/2023
Last edit:  8/3/2023
Author(s): Noah Wishnia
Version: 1.0.0
 */

let currentHealth;
let maxHealth;

///////////CURRENT HEALTH///////////
//Sets the current health variable to its initial value
// ***Should be used at beginning of game after max health has been established***

export function setCurrentHealth(healthValue)
{
    currentHealth = healthValue;
}

//Returns the current health of the player
export function getCurrentHealth()
{
    return currentHealth;
}

//Modifies the current health stat equal to the change input
// ***Sensitive to signs, use negative input to lose, positive to increase
export function changeCurrentHealth(healthChange)
{
 currentHealth = currentHealth + healthChange;
}

///////////MAX HEALTH///////////

//Sets the max health variable to its initial value
// ***Should be used at beginning of game with character base health value***
export function setMaxHealth(healthValue)
{
    maxHealth = healthValue;
}

//Returns the max health of the player
export function getMaxHealth()
{
    return maxHealth;
}

//Modifies the max health stat equal to the change input
// ***Sensitive to signs, use negative input to lose, positive to increase
export function changeMaxHealth(healthChange)
{
 maxHealth = maxHealth + healthChange;
}

///////////EXTRA///////////

export function getHealthPercent()
{
    let healthPercent = (currentHealth / maxHealth) * 100 % 100;
    return healthPercent;
}