// displays roster of the Golden State Warriors

function Roster() {
    // array of player objects
    const players = [
        {
        name: "Stephen Curry",
        num: 30,
        position: "PG",
        college: "Davidson",
        height: "6'2\"",
        weight: "185 lbs",
        experience: "14 seasons"
        },
        {
        name: "Klay Thompson",
        num: 11,
        position: "SG",
        college: "Washington State",
        height: "6'6\"",
        weight: "215 lbs",
        experience: "12 seasons"
        },
        {
        name: "Draymond Green",
        num: 23,
        position: "PF",
        college: "Michigan State",
        height: "6'6\"",
        weight: "230 lbs",
        experience: "12 seasons"
        },
        {
        name: "Andrew Wiggins",
        num: 22,
        position: "SF",
        college: "Kansas",
        height: "6'7\"",
        weight: "197 lbs",
        experience: "9 seasons"
        },
        {
        name: "Kevon Looney",
        num: 5,
        position: "C",
        college: "UCLA",
        height: "6'9\"",
        weight: "222 lbs",
        experience: "8 seasons"
        }
    ];


    // JSX returned: map through players and display info
    return (
        <div>
            <h2>Team Roster</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        <strong>#{player.num} {player.name}</strong> - {player.position} <br />
                        Height: {player.height}, Weight: {player.weight}<br />
                        College: {player.college}, Experience: {player.experience}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Export the component so we can use it in App.jsx
export default Roster;