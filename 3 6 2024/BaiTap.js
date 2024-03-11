class Pet {
    constructor(name,tieng_keu){
        this.name = name;
        this.tieng_keu = tieng_keu;
    }
    introduce(){
        console.log(`Tôi tên là ${this.name}`);
        return this.name;
    }
    talk(){
        console.log(`${this.tieng_keu}`);
        return this.tieng_keu;
    }
}
class dog extends Pet {
    constructor(name,tieng_keu,loaivat){
        super(name,tieng_keu);
        this.loaivat=loaivat;
 
    }
    loai_vat(){
        console.log(`Tôi là Động vật ${this.loaivat}`);
        return this.loaivat;
    }
}
var ten = new dog('chó','gau gau gau','4 chan')
ten.introduce();
ten.talk();
ten.loai_vat();