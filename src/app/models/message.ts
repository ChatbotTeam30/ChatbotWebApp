export class Message {
    content: string;

    constructor(content: string) {
        this.content = content;
    }


    public toString = () : string => {

        return this.content;
    }

    public setString(content:string): void {
        this.content = content
    }
}
