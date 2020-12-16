import { sleepRandomAmountOfSeconds } from '../../.cache/deno/deps/https/deno.land/208c89e744b4199dcec49910dd3f407489a0217eb12f17effdf6e11f347bbc41';
import { getRandom } from '../utils';
import {Model, ObjectManager} from './index.ts'

import Payment from './Payment.ts';


export default class Booking extends Model {
    //private name: string;
    //private email: string;
    //private numberOfDays: number;
    public payment: Payment | null = null;

    constructor() {
        super();
    }

    private sumUp() {
        return getRandom(20000, 100000);
    }

    public checkIn() {
        this.payment = new Payment(this.sumUp());
    }

}