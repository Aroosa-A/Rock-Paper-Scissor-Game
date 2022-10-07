import Player from "./classPlayer.js";


class ExtendedTwoPlayer {
    playerArray = [];
    setExtendedTwoPlayerGame(player1, player2) {
        this.playerArray = [new Player(player1), new Player(player2)];
    }
    currentPlayer() {
        return this.playerArray[0];
    }
    switchTurn() {
        this.playerArray.reverse();
    }
    getWinner(player1Choice, player2Choice, player1, player2) {
        if (player1Choice === player2Choice)
            return 'Game is Draw'
        return this.chooseCase(player1Choice, player2Choice, player1, player2);
    }
    chooseCase(player1Choice, player2Choice, player1, player2) {
        if (player1Choice === 'rock') { return this.twoPlayerCase0(player2Choice, player1, player2); }
        else if (player1Choice === 'paper') { return this.twoPlayerCase1(player2Choice, player1, player2); }
        else if (player1Choice === 'scissor') { return this.twoPlayerCase2(player2Choice, player1, player2); }
        else if (player1Choice === 'lizard') { return this.twoPlayerCase3(player2Choice, player1, player2); }
        else if (player1Choice === 'spock') { return this.twoPlayerCase4(player2Choice, player1, player2) }
    }
    twoPlayerCase0(player2Choice, player1, player2) {
        if (player2Choice === 'paper' || player2Choice === 'spock')
            return player2;
        else if (player2Choice === 'scissor' || player2Choice === 'lizard')
            return player1;
    }
    twoPlayerCase1(player2Choice, player1, player2) {
        if (player2Choice === 'rock' || player2Choice === 'spock')
            return player1;
        else if (player2Choice === 'scissor' || player2Choice === 'lizard')
            return player2;
    }
    twoPlayerCase2(player2Choice, player1, player2) {
        if (player2Choice === 'rock' || player2Choice === 'spock')
            return player2;
        else if (player2Choice === 'paper' || player2Choice === 'lizard')
            return player1;
    }
    twoPlayerCase3(player2Choice, player1, player2) {
        if (player2Choice === 'rock' || player2Choice === 'scissor')
            return player2;
        else if (player2Choice === 'paper' || player2Choice === 'spock')
            return player1;
    }
    twoPlayerCase4(player2Choice, player1, player2) {
        if (player2Choice === 'rock' || player2Choice === 'scissor')
            return player1;
        else if (player2Choice === 'paper' || player2Choice === 'lizard')
            return player2;
    }
}



export default ExtendedTwoPlayer;