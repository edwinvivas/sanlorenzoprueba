import { RegistroresidentesModule } from './registroresidentes.module';

describe('RegistroresidentesModule', () => {
    let registroresidentesModule: RegistroresidentesModule;

    beforeEach(() => {
        registroresidentesModule = new RegistroresidentesModule();
    });

    it('should create an instance', () => {
        expect(registroresidentesModule).toBeTruthy();
    });
});
