class User{
    session = [];
    setname(name){
        this.session[0] = name;

    }
    setuserid(userid){

        this.session[1] = userid;
    }
    settoken(token){
        this.session[2] = token;
    }
    getname(){

        return this.session[0];
    }
    getuserid(){

        return this.session[1];
    }
    gettoken(){
        return this.session[2];
    }

}

const user = new User();

module.exports.user = user;