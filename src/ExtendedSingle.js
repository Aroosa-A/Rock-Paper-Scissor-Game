import Player from './classPlayer.js';


class ExtendedSingle {
    player1 = '';
    player2 = '';
    randomNumber = 0;
    randomChoiceArray = [];
    randomChoice = 0;
    player1Choice = '';
    setExtendedOnePlayerGame(player) {
        this.player1 = new Player(player);
        this.player2 = new Player('computer');
    }
    decideWinner() {
        this.randomChoice = this.player2Choice();
        return this.declareWinner();
    }

    player2Choice() {
        this.randomNumber = Math.floor(Math.random() * 5);
        return this.randomNumber;
    }

    declareWinner() {
        this.randomChoiceArray = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
        if (this.randomChoiceArray[this.randomChoice] === this.player1Choice)
            return 'Game is Draw';
        return this.rules();
    }

    rules() {
        if (this.randomChoiceArray[this.randomChoice] === 'rock') return this.case0();
        else if (this.randomChoiceArray[this.randomChoice] === 'paper') return this.case1();
        else if (this.randomChoiceArray[this.randomChoice] === 'scissor') return this.case2();
        else if (this.randomChoiceArray[this.randomChoice] === 'lizard') return this.case3();
        else if (this.randomChoiceArray[this.randomChoice] === 'spock') return this.case4();
    }


    case0() {
        if (this.player1Choice === 'paper' || this.player1Choice === 'spock')
            return 'Congratulations! You Won the game';
        else if (this.player1Choice === 'scissor' || this.player1Choice === 'lizard')
            return 'Sorry! You lost the game';
    }
    case1() {
        if (this.player1Choice === 'rock' || this.player1Choice === 'spock')
            return 'Sorry! You lost the game';
        else if (this.player1Choice === 'scissor' || this.player1Choice === 'lizard')
            return 'Congratulations! You Won the game';
    }
    case2() {
        if (this.player1Choice === 'rock' || this.player1Choice === 'spock')
            return 'Congratulations! You won the game';
        else if (this.player1Choice === 'paper' || this.player1Choice === 'lizard')
            return 'Sorry! You lost the game';
    }
    case3() {
        if (this.player1Choice === 'rock' || this.player1Choice === 'scissor')
            return 'Congratulations! You won the game';
        else if (this.player1Choice === 'paper' || this.player1Choice === 'spock')
            return 'Sorry! You lost the game';
    }
    case4() {
        if (this.player1Choice === 'rock' || this.player1Choice === 'scissor')
            return 'Sorry! You lost the game';
        else if (this.player1Choice === 'paper' || this.player1Choice === 'lizard')
            return 'Congratulations! You won the game';
    }
}



export default ExtendedSingle;