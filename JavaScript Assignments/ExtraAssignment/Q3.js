// list implementation

class List{
    #list = []
    constructor(size){
        this.size = size;
    }

    push(element){
        if(this.#list.length < this.size) {
            this.#list.push(element);
        } else {
            throw "Array is full";
        }
    }

    pop(){
        this.#list.pop();
    }

    get getAll(){
        return this.#list;
    }

}

const myarr= new List(2);
myarr.push(5);
myarr.push(3);
// it will throw error for third insertion
myarr.push(6);
// will not be accessible as list is private
myarr.list