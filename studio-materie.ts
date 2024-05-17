
// tema: uno studente persona accumula materie

// tsx studio-materie.ts

// persona, uno studente è anche una persona.
// dettaglio: classi TypeScript basate su classi ECMAScript
// quindi sui prototipi, a livello ES implementativo.
class Persona {
    // property con "private identifier"
    #nome: string
    // identifier: type
    #cognome: string
    // costruttore di istanza di classe, di oggetti di classe
    constructor(nome: string, cognome: string) {
        this.#nome = nome
        this.#cognome = cognome
    }
    // getter
    get nome() {
        return this.#nome
    }
    // solo getters senza setters, non modificabilità quindi
    get cognome() {
        return this.#cognome
    }
    // string representation, rappresentazione testuale
    toString(): string {
        return this.#nome + " " + this.#cognome
    }
}

// enumerazione di Materie, tipi di materie
enum Materie { Storia, Informatica, Matematica, Scienze, Inglese, Java }

// uno studente è anche una persona
class Studente extends Persona {
    // accumula materie aggiunte
    // elementi "unici" / "unique"
    #materie: Set<Materie> = new Set<Materie>()
    // funzione di oggetto di costruzione di oggetto di classe ("costruttore")
    constructor(nome: string, cognome: string) {
        // costruttore superiore in senso ereditario
        super(nome, cognome)
    }
    // chainable come da uso di esempio
    aggiungiMateria(materia: Materie): Studente {
        // aggiunge "unique", senza duplicati
        this.#materie.add(materia)
        // permette il chaining, le chiamate "a catena"
        // di funzioni di oggetto (metodi)
        return this
    }
    // stringa composita
    toString(): string {
        const studente = "Studente: " + super.toString() + "."
        const materie = "Materie: " + this.materieElencate + "."
        return studente + " " + materie
    }
    // elenco materie come "stringa"
    get materieElencate(): string {
        // elenco, se vuoto
        if (this.#materie.size == 0)
            return "<nessuna>"
        // produci elenco
        return this.nomiMaterie.join(", ")
    }
    // nomi materie presi dalla "enum" (enumerazione)
    get nomiMaterie(): Array<string> {
        // prende il nome della materia di studio dello studente
        const associaNomeMateria = (idMateria: number): string => Materie[idMateria]
        // mappa l'elenco "enum" in elenco "string"
        return Array.from(this.#materie)
            .map(associaNomeMateria) // "mappa", associa
    }
}

// infine qualche output

// prova iniziale
console.log(new Persona("<nome>", "<cognome>").toString())

// prova ricapitolativa, finale
// console.log di oggetto di tipo Studente
console.log(
    // funzione costruttore mediante uso di "new"
    new Studente("Dario", "Arkenidar")
        // prima chiamata della funzione di oggetto
        .aggiungiMateria(Materie.Matematica)
        // chiamate "a catena"
        .aggiungiMateria(Materie.Storia)
        // stesso due volte ne aggiunge una perchè Set<> quindi ...
        .aggiungiMateria(Materie.Storia)
        .aggiungiMateria(Materie.Inglese).aggiungiMateria(Materie.Java) // joke
        // convertirlo in stringa di testo, per scriverlo a schermo, nel logging
        .toString()
)
