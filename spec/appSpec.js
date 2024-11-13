import { berlinClock } from '../app.js';

describe("getSeconds function should return the answer for the clock", function() {

    let clock = new berlinClock();

    it("getFiveHours should be return RROO when given 13" ,function(){
        
        let result = clock.getFiveHours(13);

        expect(result).toBe('RROO')
    });
});
