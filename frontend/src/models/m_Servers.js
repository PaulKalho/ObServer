import Model from "./model"

class m_Servers {
    constructor() {
        this.m_Server_List = []
        this.m_ServerObj = {}
        this.m_apiEndpoint = process.env.REACT_APP_SERVER_ENDPOINT
        this.m_ServerTable = new Model(
            this, 
            this.m_apiEndpoint,
            "m_Server_List",
            "m_ServerObj"
        )
    }

    async m_Server_FindAll() {
        return this.m_ServerTable.findAll()
    }

    async m_Server_FindBy(id, options) {
        return this.m_ServerTable.findBy()
    }

    async m_Server_insert(payload) {
        return this.m_ServerTable.insert(payload)
    }

    async m_Server_deleteBy(payload) {
        return this.m_ServerTable.deleteBy(payload)
    }

}

export default m_Servers