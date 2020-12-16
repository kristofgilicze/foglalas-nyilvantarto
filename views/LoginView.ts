import { ConsoleView } from './index.ts';

export default class LoginView extends ConsoleView {

    protected async form() {
        const felhasznalonev: string = await this.prompt('Felhasználónév');
        const jelszo: string = await this.prompt('Jelszó');
    }

}