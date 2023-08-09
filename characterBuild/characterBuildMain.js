/*
This file contains the main funciton/process for building the player character
    at the begining of the game. **Subject to change depending on how team lead
    wants this issue handled**
Start date: 8/8/2023
Last edit:  8/8/2023
Author(s): Noah Wishnia
Version: 1.0.0
 */

//////////IMPORTS//////////
import * as health from './../gameplayFuncs/healthFuncs.js';
import * as characters from './characterObject.js';
//////////VARIABLES//////////

//////////MAIN FUNCTION//////////

export function buildCharacterMain(className)
{
    let playerOne;
    switch(className)
    {
        case 'Athlete':
            playerOne = {...characters.Athlete};
            break;
        case 'Mobster':
            playerOne = {...characters.Mobster};
            break;
        case 'Professor':
            playerOne = {...characters.Professor}
            break;
        case 'Office Worker':
            playerOne = {...characters.OfficeWorker}
            break;
        case 'Guitarist':
            playerOne = {...characters.Guitarist}
            break;
        case 'EMT':
            playerOne = {...characters.EMT}
            break;
        case 'Boy Scout':
            playerOne = {...characters.BoyScout}
            break;
        default:        
    }

    return playerOne;
}

console.log(buildCharacterMain('Boy Scout'))