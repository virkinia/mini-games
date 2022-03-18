export class CustomError extends Error {
    
    public statucCode: number;

    constructor(public type: number, public message: string) {
        super(message);
    }
}

export default {
 
    GAME: {
        CANT_CREATE_SESSION: new CustomError(1, "Can't create new session"),
    }
};