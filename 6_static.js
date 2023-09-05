// class config {
//    static dbUser = 'UserName';
//    static dbpassword = 'secret';
//    static apitoken = 'abcd';
// }


// console.log(config.dbUser);















// // increment

class user {
    // static id = 1;

    static cache = {
        1: 'some value',
    };
 

    constructor(name,age,income) {
        this.name = name;
        this.age= age;
        this.income = income;
        this.id = user.id++; 
    }


    // checkcache() {}

    

    static {
        console.log('Initialized');
    }


    static hasInCache() {
        console.log(user.cache);
    }

    // static compareByAge(user1,user2) {
    //     return user1.age - user2.age

    // }

    // static compareByIncome(user1,user2) {
    //     return user1.income - user2.income

    // }
}

// user.hasInCache();

// const user1 = new user('suresh', 30, 5000);
user.hasInCache();
user.hasInCache();

// const user2 = new user('rakesh', 40, 10000);
// const user3 =new user('raju', 20, 7000);


// console.log(user1,user2,user3);