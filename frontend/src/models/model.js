import axiosInstance from "../utils/axios/axiosInstance"

class Model {

    constructor(table, endpoint, listName, objName = null,apiInstance = axiosInstance) {
        this.api = apiInstance
        this.table = table
        this.endpoint = endpoint
        this.listName = listName
        this.objName = objName
    }

    //Methods
    async findAll() {
        //Diese Funktion gettet alle Daten aus einer Datenbank
        await this.api.get(this.endpoint)
        .then(res => {     
            this.table[this.listName] = res.data;
            //Es wrid ein Objekt genutzt um es als "Referenzobjekt in der App zu nutzen"
            this.table[this.objName] = res.data[0];
        })
        .catch(err => {
            console.log(err);
            throw new Error("Etwas ist schiefgelaufen");
        })
        
    }

    async findBy(payload) {
        //Diese Funktion gettet spezifische Daten aus einer Datenbank
        //Payload ist WHERE abfrage ?!
        await this.api.post(this.endpoint, payload)
                .then(res => {
                    this.m_List = res.data;
                })
        
    }

    async insert(payload) {
        await this.api.post(this.endpoint, payload)
                .then(res => {
                    //Es wird das hinzugefügte Objekt zurückgegeben
                    this.table[this.objName] = res.data
                })
                .catch(err => {
                    console.log(err)
                    throw new Error("Etwas ist schiefgelaufen");
                })
    }

    async deleteOne(id) {
        //Delte by one by id
        await this.api.delete(this.endpoint + id + "/")
                    .catch((err) => {
                        throw new Error("Etwas ist schiefgelaufen!");
                    })
    }

    async deleteBy(payload) {
        //Delete by Payload
        await this.api.post(this.endpoint + "deleteBy/", payload)
                    .catch((err) => {
                        console.log(err)
                        throw new Error("Etwas ist schiefgelaufen");
                    })
    }

    async runProcedure(id_acc = null) {
        await this.api.post(this.endpoint, {id: id_acc}) 
                .then(res => {
                    this.table[this.listName] = res.data;
                })
                .catch((err) => {
                    console.log(err);
                })
    }

}

export default Model;