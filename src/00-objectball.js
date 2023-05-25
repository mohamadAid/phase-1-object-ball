function gameObject() {
    const obj = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assits: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assits: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assits: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assits: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assits: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assits: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assits: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assits: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assits: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assits: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
    return obj;
  }


  const game = gameObject();

  function numPointsScored(playerName) {
    // Check if the player exists
    if (game.home.players.hasOwnProperty(playerName)) {
      return game.home.players[playerName].points;
    }
  
    else if (game.away.players.hasOwnProperty(playerName)) {
      return game.away.players[playerName].points;
    }
    
    else return "Player not found";
  }

  function shoeSize(playerName) {
    // Check if the player exists
    if (game.home.players.hasOwnProperty(playerName)) {
      return game.home.players[playerName].shoe;
    }
  
    else if (game.away.players.hasOwnProperty(playerName)) {
      return game.away.players[playerName].shoe;
    }
    
    else return "Player not found";
  }

  function teamColors(tName) {
    if (game.home.teamName=== tName) {
      return game.home.colors;
    }
  
    else if (game.away.teamName=== tName) {
      return game.away.colors;
    }
    
    else return "Team not found";
  }

  function teamNames() {
    const teamNames = [game.home.teamName, game.away.teamName];
  
    return teamNames;
  }

  function playerNumbers(teamName) {
    const team = teamName;
  
    if (game.home.teamName === team) {
      return Object.values(game.home.players).map(player => player.number);
    } else if (game.away.teamName === team) {
      return Object.values(game.away.players).map(player => player.number);
    } else {
      return [];
    }
  }

  function playerStats(playerName) {
    if (game.home.players[playerName]) {
      return game.home.players[playerName];
    }
  
    else if (game.away.players[playerName]) {
      return game.away.players[playerName];
    }
    
    else return "Player not found";
  }

  function bigShoeRebounds() {
    let largestShoeSize= 0;
    let playerWithLargestShoeSize = 0;
  
    for (const team of Object.values(game)) {
      for (const player of Object.values(team.players)) {
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          playerWithLargestShoeSize = player;
        }
      }
    }
  
    if (playerWithLargestShoeSize !== null) {
      return playerWithLargestShoeSize.rebounds;
    }
  
    return null; 
  }