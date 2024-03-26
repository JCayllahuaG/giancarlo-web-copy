export class Service{
    constructor(id,name,port,protocol, published ){
        this.id = id;
        this.name = name;
        this.port = port;
        this.protocol = protocol;
        this.published = published;
        this.status = this.published === true ? 'Published' : 'Unpublished'
    }

    static FromDisplayableService(displayableService){
        return new Service(
            displayableService.id,
            displayableService.name,
            displayableService.protocol,
            displayableService.status.label === 'Published')
    }
    static toDisplayableService(service){
        return {
            id: service.id,
            name: service.name,
            protocol: service.protocol,
            status: service.published === true ? 'Published' : 'Unpublished'
        }
    }
}