/*
This file contains the object frame work for buidling each character. This 
     includes stats and special abilities. ** May include other abilities
     and items down the road?**
Start date: 8/8/2023
Last edit:  8/9/2023
Author(s): Noah Wishnia
Version: 1.0.0
 */

//Athlete object filled with base stats
export const Athlete =
    {
        //Character class
        type: "Athlete",

        //Character stats
        health: 100,
        sanity: 60,
        observation: 25,

        //Character traits
        fighting:  50,
        accuracy:  40,
        reaction:  60,//reaction time
        toughness: 70,
        mental:    60, //Mental Stability
        
        //Special perk
        perk: "perk"
    }

//Mobster object filled with base stats
export const Mobster =
    {
        //Character class
        type: "Mobster",

        //Character stats
        health: 100,
        sanity: 40,
        observation: 75,

        //Character traits
        fighting:  70,
        accuracy:  75,
        reaction:  65,//reaction time
        toughness: 55,
        mental:    45, //Mental Stability
        
        //Special perk
        perk: "perk"
    }

//Professor object filled with base stats
export const Professor =
{
    //Character class
    type: "Professor",

    //Character stats
    health: 60,
    sanity: 80,
    observation: 80,

    //Character traits
    fighting:  30,
    accuracy:  10,
    reaction:  35,//reaction time
    toughness: 55,
    mental:    85, //Mental Stability
    
    //Special perk
    perk: "perk"
}

//Office Worker object filled with base stats
export const OfficeWorker =
{
    //Character class
    type: "Office Worker",

    //Character stats
    health: 80,
    sanity: 60,
    observation: 50,

    //Character traits
    fighting:  55,
    accuracy:  45,
    reaction:  65,//reaction time
    toughness: 55,
    mental:    45, //Mental Stability
    
    //Special perk
    perk: "perk"
}

//Guitarist object filled with base stats
export const Guitarist =
{
    //Character class
    type: "Guitarist",

    //Character stats
    health: 80,
    sanity: 60,
    observation: 25,

    //Character traits
    fighting:  65,
    accuracy:  45,
    reaction:  85,//reaction time
    toughness: 55,
    mental:    45, //Mental Stability
    
    //Special perk
    perk: "perk"
}

//EMT object filled with base stats
export const EMT =
{
    //Character class
    type: "EMT",

    //Character stats
    health: 70,
    sanity: 70,
    observation: 70,

    //Character traits
    fighting:  15,
    accuracy:  15,
    reaction:  65,//reaction time
    toughness: 50,
    mental:    50, //Mental Stability
    
    //Special perk
    perk: "perk"
}

//Boy Scout object filled with base stats
export const BoyScout =
{
    //Character class
    type: "Boy Scout",

    //Character stats
    health: 35,
    sanity: 50,
    observation: 70,

    //Character traits
    fighting:  5,
    accuracy:  5,
    reaction:  5,//reaction time
    toughness: 5,
    mental:    5, //Mental Stability
    
    //Special perk
    perk: "perk"
}