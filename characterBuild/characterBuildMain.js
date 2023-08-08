/*
This file contains the main funciton/process for buidling the player character
    at the begining of the game. **Subject to change depending on how team lead
    wants this issue handled**
Start date: 8/8/2023
Last edit:  8/8/2023
Author(s): Noah Wishnia
Version: 1.0.0
 */

// **May not need this**
//////////CLASS TO NUMBER//////////

    const Athlete      = 1;
    const Mobster      = 2;
    const Professor    = 3;
    const OfficeWorker = 4;
    const Guitarist    = 5;
    const EMT          = 6;
    const BoyScout     = 7;
//////////IMPORTS//////////
import * as health from './../gameplayFuncs/healthFuncs.js';
//////////VARIABLES//////////

//////////MAIN FUNCTION//////////

export function buildCharacterMain(className)
{
    let character = 
    {
        class: className,
        Health: health.getCurrentHealth()
    };

    return character;
}

console.log(buildCharacterMain())