export class berlinClock {

    getSeconds(seconds) {
        if (seconds % 2 === 0) {
            return 'R'; // R -> Pour Red quand c'est allumée
        }else{
            return 'O'; // O -> Pour Off quand c'est éteint
        }
    }

    getFiveHours(hours) {
        let row = '';
        let litBlock = Math.floor(hours / 5);

        for (let i = 0; i < 4; i++) {
            if (i < litBlock){
                row += 'R'; // R -> Pour Red quand c'est allumée
            } else{
                row += 'O'; // O -> Pour Off quand c'est éteint
            }
        }
        return row;
    }
}