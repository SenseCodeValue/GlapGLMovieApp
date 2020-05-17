//resolver => 쉽게 생가가해서 resolve query 즉, query를 해결하는 역할을 한다.
//query는 단지 선언일 뿐이며, db에서 데이터를 가져오는 역할은 resolver가 한다.

const nicolas = {
    name : "Nicolas",
    age: 18,
    gender : "male"
}

const resolvers = {
    Query : {
        person: () => nicolas
    }
}


export default resolvers;