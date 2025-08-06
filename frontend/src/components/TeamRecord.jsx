// defines a React component called TeamRecord
function TeamRecord() {
    // hardcoded object that stores team's stats
    const record = {
        teamName: "Golden State Warriors",
        wins: 44,
        losses: 38,
        ppg: 118.9,
        rpg: 44.6,
        apg: 29.7
    };

    // This is the JSX returned by the component
    // It describes what gets rendered on the page
    return (
        <div>
            <h2>{record.teamName} - Season Stats</h2>
            <ul>
                <li>Wins: {record.wins}</li>
                <li>Losses: {record.losses}</li>
                <li>Points Per Game (PPG): {record.ppg}</li>
                <li>Rebounds Per Game (RPG): {record.rpg}</li>
                <li>Assists Per Game (APG): {record.apg}</li>
            </ul>
        </div>
    );
}

// This allows the component to be imported and used in other files (like App.jsx)
export default TeamRecord;