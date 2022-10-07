import Player from "./classPlayer.js";

class TwoPlayerGame {
    playerArray = [];
    setTwoPlayerGame(player1, player2) {
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
        if (player1Choice === 'rock')
            return this.twoPlayerCase0(player2Choice, player1, player2);
        else if (player1Choice === 'paper')
            return this.twoPlayerCase1(player2Choice, player1, player2);
        else if (player1Choice === 'scissor')
            return this.twoPlayerCase2(player2Choice, player1, player2);
    }
    twoPlayerCase0(player2Choice, player1, player2) {
        if (player2Choice === 'paper')
            return player2;
        return player1;
    }
    twoPlayerCase1(player2Choice, player1, player2) {
        if (player2Choice === 'rock')
            return player1;
        return player2;
    }
    twoPlayerCase2(player2Choice, player1, player2) {
        if (player2Choice === 'rock')
            return player2;
        return player1;
    }
}



export default TwoPlayerGame;