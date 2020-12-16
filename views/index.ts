const HEADER = '    ______            __      __  __                      _ __        __        __             __    __\r\n   \/ ____\/___  ____ _\/ \/___ _\/ \/_\/_\/______   ____  __  __(_) \/   ____\/_\/_____  \/ \/_____ ______\/ \/___\/_\/\r\n  \/ \/_  \/ __ \\\/ __ `\/ \/ __ `\/ \/ __ `\/ ___\/  \/ __ \\\/ \/ \/ \/ \/ \/ | \/ \/ __ `\/ __ \\\/ __\/ __ `\/ ___\/ __\/ __ \\\r\n \/ __\/ \/ \/_\/ \/ \/_\/ \/ \/ \/_\/ \/ \/ \/_\/ (__  )  \/ \/ \/ \/ \/_\/ \/ \/ \/| |\/ \/ \/_\/ \/ \/ \/ \/ \/_\/ \/_\/ \/ \/  \/ \/_\/ \/_\/ \/\r\n\/_\/    \\____\/\\__, \/_\/\\__,_\/_\/\\__,_\/____\/  \/_\/ \/_\/\\__, \/_\/_\/ |___\/\\__,_\/_\/ \/_\/\\__\/\\__,_\/_\/   \\__\/\\____\/ \r\n            \/____\/                              \/____\/                                                 ';
const SEP = '----------------------------------------------------------------------------------------------------------';


export class ConsoleView {

    protected body = '';
    protected footer = '';

    protected async prompt(message = ''): Promise<string> {
        const buf = new Uint8Array(1024);
        await this.stdout(message + ": ");
        const n = <number>await Deno.stdin.read(buf);
        return new TextDecoder().decode(buf.subarray(0, n)).trim();
    }
    
    protected async stdout(value: string): Promise<void> {
        await Deno.stdout.write(new TextEncoder().encode(value));
    }

    protected form() {
        //
    }

    public async render() {
        await this.stdout(HEADER + '\n');
        console.log(SEP);
        await this.stdout(this.body);
        this.form();
        console.log(SEP);
        await this.stdout(this.footer);
    }

}