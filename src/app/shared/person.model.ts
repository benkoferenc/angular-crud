export interface Person {
    resourceType?: string,
    id: string,
    text?: Narrative,
    identifier?: Identifier[],
    name: HumanName[],
    telecom?: ContactPoint[],
    gender: 'male' | 'female' | 'other' | 'unknown',
    birthDate: string,
    address?: Address[],
    photo?: Attachment,
    managingOrganization?: Reference,
    active?: boolean,
    link?: Link[]
}

export interface Link {
    target: Reference,
    assurance?: 'level1' | 'level2' | 'level3' | 'level4'
}

export interface Reference {
    reference?: string,
    type?: string,
    identifier?: string[],
    display?: string
}

export interface Narrative {
    status: string,
    div: string;
}

export interface Identifier {
    use?: "usual" | "official" | "temp" | "secondary" | "old",
    type?: CodeableConcept,
    system?: string,
    value?: string,
    period?: Period,
    assigner?: Reference
}

export interface CodeableConcept {
    text?: string,
    coding?: Coding[]
}

export interface Coding {
    system?: string,
    version?: string,
    code?: string,
    display?: string,
    userSelected?: boolean
}

export interface HumanName{
    use?: string,
    text?: string,
    family?: string,
    given?: string[],
    prefix?: string[],
    suffix?: string[],
    period?: Period
}

export interface Period{
    start?: string,
    end?: string
}

export interface ContactPoint{
    system?: string
    value?: string,
    use?: string,
    rank?: number,
    period?: Period
}

export interface Address{
    use?: string,
    type?: string,
    text?: string,
    line?: string[],
    city?: string,
    district?: string,
    state?: string,
    postalCode?: string,
    country?: string,
    period?: Period,

}

export interface Attachment{
    contentType?: string,
    language?: string,
    data?: string,
    url?: string,
    size?: number,
    hash?: string,
    title?: string,
    creation?: string
}