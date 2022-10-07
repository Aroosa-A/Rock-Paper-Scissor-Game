import Player from "./classPlayer.js";

class SinglePlayerGame {
    player1 = '';
    player2 = '';
    randomNumber = 0;
    randomChoiceArray = [];
    randomChoice = 0;
    player1Choice = '';
    setSinglePlayerGame(player) {
        this.player1 = new Player(player);
        this.player2 = new Player('computer');
    }

    decideWinner() {
        this.randomChoice = this.player2Choice();
        return this.declareWinner();
    }

    player2Choice() {
        this.randomNumber = Math.floor(Math.random() * 3);
        return this.randomNumber;
    }

    declareWinner() {
        this.randomChoiceArray = ['rock', 'paper', 'scissor'];
        if (this.randomChoiceArray[this.randomChoice] === this.player1Choice)
            return 'Game is Draw';
        else
            return this.rules();
    }

    rules() {
        if (this.randomChoiceArray[this.randomChoice] === 'rock') return this.case0();
        else if (this.randomChoiceArray[this.randomChoice] === 'paper') return this.case1();
        else if (this.randomChoiceArray[this.randomChoice] === 'scissor') return this.case2();
    }


    case0() {
        if (this.player1Choice === 'paper')
            return 'Congratulations! You Won the game';
        else
            return 'Sorry! You lost the game';
    }
    case1() {
        if (this.player1Choice === 'rock')
            return 'Sorry! You lost the game';
        else
            return 'Congratulations! You Won the game';
    }
    case2() {
        if (this.player1Choice === 'rock')
            return 'Congratulations! You won the game';
        else
            return 'Sorry! You lost the game';
    }
}


export default SinglePlayerGame;