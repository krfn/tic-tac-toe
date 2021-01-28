const game = document.getElementById('gameboard');

const board = (() => {
    const row = [['x', 'o', 'x'],['o', 'x', 'o'],['x', 'o', 'x']];
    const display = () => {
        for (let i = 0; i < row.length; i++) {
            for (let square of row[i]) {
                const mark = document.createElement('div');
                mark.textContent = square;
                mark.className = 'marks';
                game.appendChild(mark);
            }
        }
    }
    return {display};
})();

const player = (move) => {
    return {move};
}

board.display();