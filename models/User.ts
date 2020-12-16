import {Model} from './index.ts';

export default class User extends Model {
    
    public auth(username: string, password: string): boolean {
        return true;
    }

}
