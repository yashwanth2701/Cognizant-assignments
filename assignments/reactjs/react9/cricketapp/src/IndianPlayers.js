// Original Indian Team
const team = [
    "Sachin",
    "Dhoni",
    "Virat",
    "Rohit",
    "Yuvraj",
    "Raina"
];

// ES6 Destructuring
const [first, second, third, fourth, fifth, sixth] = team;

// Odd Players
export function OddPlayers() {
    return (
        <ul>
            <li>First : {first}</li>
            <li>Third : {third}</li>
            <li>Fifth : {fifth}</li>
        </ul>
    );
}

// Even Players
export function EvenPlayers() {
    return (
        <ul>
            <li>Second : {second}</li>
            <li>Fourth : {fourth}</li>
            <li>Sixth : {sixth}</li>
        </ul>
    );
}

// Two Arrays
const T20players = ["Surya", "Hardik", "Gill"];
const RanjiTrophy = ["Pujara", "Rahane", "Saha"];

// ES6 Merge using Spread Operator
export const IndianPlayers = [...T20players, ...RanjiTrophy];