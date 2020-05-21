//resolver => 쉽게 생가가해서 resolve query 즉, query를 해결하는 역할을 한다.
//query는 단지 선언일 뿐이며, db에서 데이터를 가져오는 역할은 resolver가 한다.
import {getMovies, getById, addMovie, deleteMovie} from './db'; 

const resolvers = {
    Query : {
        movies : ()=>getMovies(),
        // person: () => nicolas
        movie : (_,{ id })=> getById(id),
        //db에 대한 요청이 여기 들어가면되겠다. select문 같은 부분이
        //그렇다면 비즈니스 로직은 어디에 들어가는가? 내생각에 그것도 여기서 연결해서 보내주는 형식이 될것으로 예상된다.
    },
    Mutation:{
        addMovie : (_,{name, score}) => addMovie(name, score),
        deleteMovie : (_,{ id }) => deleteMovie(id)
    }
}


export default resolvers;