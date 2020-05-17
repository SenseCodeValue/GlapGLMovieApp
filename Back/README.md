# GraphQL Study

### GraphQL의 장점
프론트에서 원하는 정보를 불러올때 get /user을 한다고하면 back-end API에 정의 되있는 정보들이 즉, DB의 데이터들이 가게된다 
하지만 이때 내가 필요로한것은 단지 id, userName이라면?! 프론트엔드는 쓸떄없는 많은 다른 정보들을 얻게 되는 것이다.
따라서 Graphql은 프론트에서 쿼리를 작성하기 떄문에 필요로하는 정보만을 제공 받을 수 있도록 한다. 

### GraphQL을 진행하면서 생각해야 될점 2가지!
- Over-fetching 
    => 위에서 언급한 쓸모없는 정보를 많이 받는것을 말하는데 GraphQL은 이를 해결한다.

- Under-fetching 
    => 인스타그램을 켠다면 /feed/ , /notifications/ /user/ 등등 의 3가지의 요청, 응답이 일어나게된다.
    => GraphQL은 이러한 것을 1나의 쿼리로 엮어서 데이터를 받는 query를 작성하면 된다. 

#### 따라서 GraphQL은 RESTAPI처럼 다른 URL 체계가 존재하지 않는다. 즉, 하나의 endPoint만 존재한다. 

그래서 위의 것을 해석해서 GraphQL query로 만들면
query {
    feed {
        comments
        likeNumber
    }
    notifications {
        isRead
    }
    user {
        username
        profile
    }
}
toJS
{
    feed [
        {
            comments:1,
            likeNumber: 20
        }
    ],
    .....>
}
## 즉, 이렇게 말하고 싶은점은 내가 요청한 정보들만을 받아볼 수 있으며, 그것을 원하는 방식으로 만들어 낼 수 있다는것이 가장 큰 특징이자 장점이다.