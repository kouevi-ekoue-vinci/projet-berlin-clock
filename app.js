export class berlinClock {

    getSeconds(seconds) {
        if (seconds % 2 === 0) {
            return 'Allumée';
        }else{
            return 'Eteint';
        }
    }
}