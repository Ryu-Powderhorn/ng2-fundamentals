export interface IEvent {
    id: number
    name: string
    date: Date
    time: string
    price: number
    imageUrl: string
    locatin?: {
        address: string
        city: string
        county: string
    },
    onilneUrl?: string,
    sessions: ISession[]

}

export interface ISession {
    id: number
    name: string
    presenter: string    
    duratin: number
    level: string
    abstract: string 
    voters: string[]
}