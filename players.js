const { connectDB, disconnectDB } = require('./modules/db');
const modelPlayer = require('./models/playerSchema');

const addPlayers = async () => {
    const players = [
        {
            num: "30",
            name: "Stephen Curry",
            position: "PG",
            height: "6-2",
            weight: 185,
            bday: "March 14, 1988",
            experience: 14,
            active: true,
            college: "Davidson",
        },
        {
            num: "11",
            name: "Klay Thompson",
            position: "SF",
            height: "6-6",
            weight: 215,
            bday: "February 8, 1990",
            experience: 10,
            active: true,
            college: "Washington State"
        },
        {
            num: "00",
            name: "Jonathan Kuminga",
            position: "PF",
            height: "6-8",
            weight: 210,
            bday: "October 6, 2002",
            experience: 2,
            active: true,
            college: "None"
        },
        {
            num: "2",
            name: "Brandin Podziemski",
            position: "SG",
            height: "6-5",
            weight: 205,
            bday: "February 25, 2003",
            experience: 0,
            active: true,
            college: "Illinois, Santa Clara"
        },
        {
            num: "5",
            name: "Kevon Looney",
            position: "C",
            height: "6-9",
            weight: 222,
            bday: "February 6, 1996",
            experience: 9,
            active: true,
            college: "UCLA"
        },
        {
            num: "22",
            name: "Andrew Wiggins",
            position: "SF",
            height: "6-7",
            weight: 197,
            bday: "February 23, 1995",
            experience: 9,
            active: true,
            college: "Kansas"
        },
        {
            num: "32",
            name: "Trayce Jackson-Davis",
            position: "PF",
            height: "6-9",
            weight: 245,
            bday: "February 22, 2000",
            experience: 0,
            active: true,
            college: "Indiana",
        },
        {
            num: "4",
            name: "Moses Moody",
            position: "SG",
            height: "6-6",
            weight: 205,
            bday: "May 31, 2002",
            experience: 2,
            active: true,
            college: "Arkansas",
        },
        {
            num: "20",
            name: "Dario Saric",
            position: "C",
            height: "6-10",
            weight: 225,
            bday: "April 8, 1994",
            experience: 6,
            active: true,
            college: "None",
        },
        {
            num: "3",
            name: "Chris Paul",
            position: "PG",
            height: "6-0",
            weight: 175,
            bday: "May 6, 1985",
            experience: 18,
            active: true,
            college: "Wake Forest"
        },
        {
            num: "23",
            name: "Draymond Green",
            position: "PF",
            height: "6-6",
            weight: 230,
            bday: "March 4, 1990",
            experience: 11,
            active: true,
            college: "Michigan State"
        },
        
        {
            num: "0",
            name: "Gary Payton II",
            position: "SG",
            height: "6-2",
            weight: 190,
            bday: "December 1, 1992",
            experience: 7,
            active: true,
            college: "Oregon State"
        },
        {
            num: "25",
            name: "Lester Quinones",
            position: "SG",
            height: "6-5",
            weight: 208,
            bday: "November 16, 2000",
            experience: 1,
            active: true,
            college: "Memphis"
        },
        {
            num: "15",
            name: "Gui Santos",
            position: "PF",
            height: "6-8",
            weight: 209,
            bday: "June 22, 2002",
            experience: 0,
            active: true,
            college: "None"
        },
    ];

    try {
        await connectDB();

        for (const playerData of players) {
            const player = new modelPlayer(playerData);
            await player.save();
            console.log(`Added player: ${player.name}`);
        }

        await disconnectDB();
    } catch (error) {
        console.error('Error adding players:', error);
    }
};

addPlayers();
