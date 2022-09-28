class User{
    session = [];
    setname(name){
        this.session[0] = name;

    }
    setuserid(userid){

        this.session[1] = userid;
    }
    getname(){

        return this.session[0];
    }
    getuserid(){

        return this.session[1];
    }
}

const user = new User();

module.exports.user = user;