import { BlankPage2Module } from './blank-page2.module';

describe('BlankPage2Module', () => {
    let blankPage2Module: BlankPage2Module;

    beforeEach(() => {
        blankPage2Module = new BlankPage2Module();
    });

    it('should create an instance', () => {
        expect(blankPage2Module).toBeTruthy();
    });
});
