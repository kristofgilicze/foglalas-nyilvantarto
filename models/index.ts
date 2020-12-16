import DAO from '../DAO.ts'

import { v4 as uuid } from "https://deno.land/std/uuid/mod.ts";


export class Model {

    public id!: string;
    protected dao: DAO;

    constructor(_uuid?: string) {
        this.dao = new DAO('db.json');

        if ( ! _uuid ) this.id = uuid.generate();
    }

}
