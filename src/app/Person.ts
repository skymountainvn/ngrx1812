export class Person {
    _id: string;
    name: string;
    age: number;
    height: number;

    static people: Person[] = [
        new Person('teo1', 'Teo', 10, 100),
        new Person('ti2', 'Ti', 11, 150),
        new Person('tun3', 'Tun', 13, 110),
    ]

    constructor(_id: string, name: string, age: number, height: number) {
        this._id = _id;
        this.name = name;
        this.age = age;
        this.height = height;
    }

    static findPersonById(_id: string): Person {
        return Person.people.find(person => person._id === _id);
    }
}
