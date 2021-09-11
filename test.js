// class in javascript

class Parent{

    constructor(){
        //super();
        this.Pname ='parent'
    }
     getPName(){
       console.log(this.Pname);
    }
}
class Child extends Parent{
    constructor(){
        super();
        this.Cname = 'child'
    }
    getCName(){
        console.log(this.Cname);
    }
}
// here child class has excess to parent class
const child = new Child();
child.getPName()
child.getCName()
