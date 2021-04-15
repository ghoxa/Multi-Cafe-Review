# Multi-Cafe-Review

## API 정리

**`공통 URL`**  http://localhost:9090/multicafe/api


### ☕CAFE

`GET` **/cafe** : 모든 카페 가져오기

`GET` **/cafe/{cafeId}** : cafeId에 해당하는 카페 가져오기

-----------------------------------------
### 🧾MENU

`GET` **/menu** : 메뉴 전체목록

`GET` **/menu/{menuId}** : menuId에 해당하는 메뉴 가져오기

`GET` **/menu/list/{condition}** : 좋아요순/조회수순/평점순/리뷰많은순 정렬 (condition: good/click/grade/review)

`GET` **/menu/cafe/{cafeId}/{condition}** : cafeId에 해당하는 카페 메뉴의 condition별 정렬

`GET` **/menu/category/{categoryId}/{condition}** : categoryId에 해당하는 카테고리의 condition별 정렬

`GET` **/menu/cafe/{cafeId}** : cafeId에 해당하는 카페 메뉴

`GET` **/menu/category/{categoryId}** : categoryId에 해당하는 카테고리 메뉴

`GET` **/menu/cafe/{cafeId}/category/{categoryId}** : 카페의 카테고리에 해당하는 메뉴

`GET` **/menu/cafe/{cafeId}/category/{categoryId}/{condition}** : 카페의 카테고리에 해당하는 메뉴 condition 정렬

`GET` **/menu/search/{keyword}** : keyword로 메뉴 검색

`GET` **/menu/cafe/{cafeId}/search/{keyword}** : cafeId안에서 keyword로 메뉴 검색

`GET` **/menu/search/{keyword}/{condition}** : keyword로 메뉴 검색 condition 정렬

`GET` **/menu/{menuId}/recommend/keyword** : keyword기반 추천메뉴

`GET` **/menu/{menuId}/recommend/taste** : taste기반 추천메뉴

----------------------------------------
### 🏷CATEGORY

`GET` **/category** : 모든 카테고리 가져오기

`GET` **/category/{categoryId}** : categoryId에 해당하는 카테고리 가져오기

----------------------------------------
### ✒REVIEW
**[리뷰 CRUD]**

`POST` **/user/review** : 리뷰 추가 (Reivew 객체 보내줘야함)
```json
{
  "reviewId":"",
  "reviewDate":"",
  "content":"리뷰내용",
  "good:":"",
  "grade":"",
  "userId":"sunga",
  "menuId":50000130,
  "sweet":"",
  "bitter":"",
  "sour":""
}
```
`GET` **/review/{menuId}** :  메뉴별 리뷰 가져오기

`GET` **/review/good/{menuId}** : 좋아요 많은 순으로 리뷰 가져오기

`DELETE` **/review/{reviewId}** : 리뷰삭제

`PUT` **/user/review** : 리뷰 수정(Review 객체로 넘겨줘야 함) 

`GET` **/user/review/my/{userId}** : 특정 사용자가 작성한 리뷰 리스트 보여주기

</br>

**[리뷰 좋아요]**

`POST` **/user/review/good/count** : 리뷰 좋아요/좋아요 취소 (ReviewLike 객체 보내줘야함) 
  - reviewLike 테이블에 넘겨주는 객체가 없는 상태면 테이블에 해당 객체 삽입&좋아요+1 , 있는 상태면 해당 객체 삭제&좋아요-1
  - 같은 ID로 한번 Post하면(좋아요) 1 리턴, 다시 Post 하면 (좋아요 취소) 0 리턴

```
{
  "reviewLikeId":"",
  "reviewId":70000013,
  "userId":"sunga"
} 
```
</br>

**[리뷰 신고 기능]**

`GET` **/user/{userId}/reports** : 신고횟수로 리뷰를 작성할 수 있는 사용자인지 판단 (true/false) 

`PUT` **/review/{reviewId}/{userId}/reports** : 신고 버튼 누를 때 처리할 일 

`GET` **/review/{reviewId}/{userId}/reports** : 사용자가 이미 신고한 리뷰인지 판단(0일 때 신고 가능) 

</br>

----------------------------------------
### 👨‍👩‍👧USER

`POST` **/register** : 회원가입
```
{
  "userId":"id",
  "pwd":"password",
  "phone":"010-1234-4321",
  "email":"aaa@naver.com",
  "address":"서울시 노원구",
  "sweet":4.5,
  "bitter":1,
  "sour":2,
  "coffee_sour":0.5
}
```

`GET` **/register/{id}/check** : 회원가입되어 있는 id인지 확인 (id 중복체크)

`GET` **/user/{userId}** : 회원 정보

`PUT` **/user** : 회원 정보 수정
```
{
  "userId":"id",
  "pwd":"password",
  "phone":"010-1234-4321",
  "email":"aaa@naver.com",
  "address":"서울시 노원구",
  "sweet":4.5,
  "bitter":1,
  "sour":2,
  "coffee_sour":0.5
}
```

`GET` **/user/recent/{userId}** : 회원이 최근 본 메뉴 (20개까지 보여줌)

`GET` **/menu/recommend/{userId}** : 회원의 취향에 맞는 메뉴추천(30개만 보여줌)

`POST` **/user/{userId}/{menuId}/likecheck** : 이미 좋아요인 상태면 좋아요 취소, 아닐 시에는 좋아요 추가

**[메뉴 좋아요]** - 회원 전용 기능

`GET` **/menu/check/{menuId}/{userId}** : 메뉴 좋아요 체크 (로그인 되어있는 user가 해당 menu를 like해놓은 상태면 true반환 비회원이거나 안해놨으면 false 반환)

`GET` **/user/{userId}/menu/{menuId}/like** : 메뉴 좋아요 

`GET` **/user/{userId}/menu/like** : 회원의 메뉴 좋아요 목록

----------------------------------------
### 🔐LOGIN

`POST` **/login** : 회원 로그인
```
{
  "userId":"id",
  "pwd":"password"
}
```

`GET` **/login** : 회원 로그아웃

-----------------------------------------
### ⚙ADMIN
**[카페]**

`POST` **/admin/cafe** : 카페 추가
```
{
  "cafeId":"",
  "name":"스타벅스",
  "image":"url"
}
```

`DELETE` **/admin/cafe/{cafeId}** : 카페 삭제 </br></br>


**[리뷰 관련]**

`GET` **/admin/review/reports** : 관리자페이지에서 신고건수 10회 이상인 리뷰 조회 </br>

`DELETE` **/admin/review/{reviewId}** : 관리자 페이지에서 리뷰 삭제 </br>


**[메뉴 관련]**

`POST` **/admin/menu** : 메뉴 추가 </br>
```json
{
  "name":"메뉴이름",
  "price":1000,
  "description":"이 메뉴는 맛있어요",
  "keyword:":"아메리카노",
  "image":"(이미지주소)",
  "hot":0,
  "ice":1,
  "categoryId":2000,
  "cafeId":3000
}
```

`PUT` **/admin/menu** : 메뉴 수정 </br>
```json
{
  "menuId":"50000123",
  "name":"메뉴이름",
  "price":1000,
  "description":"이 메뉴는 맛있어요",
  "keyword:":"아메리카노",
  "image":"(이미지주소)"
}
```

`DELETE` **/admin/menu/{menuId}** : 메뉴 삭제 </br>
