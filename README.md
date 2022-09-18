# Rest & GraphQl API 연습을 위해 만든 레파지토리입니다. (inflearn "풀스택 리액트 토이프로젝트 - REST, GraphQL (for FE개발자)" 강의를 듣고있습니다🚀)

<li/>
<li/>
<li/>
<li/>
<li/>
<li/>

# 풀스택 리액트 토이프로젝트 - REST, GraphQL (for FE개발자)

[인프런 강의 링크](https://www.inflearn.com/course/풀스택-리액트-토이프로젝트?inst=4227b52f)

- ReactJS 기반의 간단한 SNS 서비스를 만들면서 REST API 및 GraphQL을 연습합니다.
- 클라이언트와 서버 양쪽을 모두 다룸으로써 서버에 대한 두려움을 낮춰드리고자 합니다.
- 프론트엔드 개발을 위해 MySQL, mongoDB, Firebase 등을 찾아다니지 않아도 됩니다.

## 대상

- 프론트엔드 개발자 또는 취준생
- 데이터통신 연습을 하고 싶은데 마땅한 방법을 몰라 고민이신 분
- Database나 server에 대해서까지 오랜 시간을 들여 공부해야 할지 망설여지는 분
- 개발 단계에서 api가 마련되기 전에 프론트엔드 개발을 서두르고 싶은 분

## 다루는 내용

- core
  - NodeJS
  - express
  - json Database (file system)

- code base (optional)
  - React.JS
  - Next.JS
  - GrapQL
  - Axios
  - ReactQuery
  - LowDB

## 강의 성격

- 프론트엔드 개발을 위한 백엔드 환경을 보다 쉽고 간단하게 준비할 수 있는 방법을 소개해드리는 내용입니다.
- 최신 javascript 문법을 사용합니다. 최신문법에 익숙하지 않은 분들은 중간중간 별도의 학습이 필요합니다.
- 이론을 자세하게 설명하는 강의는 아닙니다.

## 목표

- CRUD(Create, Read, Update, Delete)의 기본기를 다집니다.
- 연습용 서버(REST API, GraphQL)를 직접 만들 수 있습니다.
- 로컬에서 간단하게 DB를 구축하는 방법을 배웁니다.

## 커리큘럼

### 1. Client - 기본기능 구현

- 클라이언트 환경 세팅
- 목록뷰 구현
- 스타일
- 메시지 추가하기
- 메시지 수정 & 삭제하기

### 2. Server - REST API 

- express 이용한 서버 및 JSON Database 만들기
- server routes
- [[Ch1 -> Ch2 비교]](https://github.com/roy-jung/api-practice/pull/9/files)

### 3. Client - REST API 통신

- 클라이언트에서 REST API로 데이터 통신하기
- 무한스크롤 구현하기
- 서버사이드 렌더링
- [[Ch2 -> Ch3 비교]](https://github.com/roy-jung/api-practice/pull/10/files)

### 4. Server - GraphQL

- GraphQL 환경세팅 및 schema 작성
- resolver 작성
- GraphQL Playground 소개 및 동작 테스트
- [[Ch3 -> Ch4 비교]](https://github.com/roy-jung/api-practice/pull/11/files)

### 5. Client - GraphQL 통신

- GraphQL 환경세팅
- 클라이언트에서 GraphQL로 데이터 통신하기
- [[Ch4 -> Ch5 비교]](https://github.com/roy-jung/api-practice/pull/12/files)

### 6. Client - GraphQL 무한스크롤

- useInfiniteQuery 적용하기
- 무한스크롤 환경에서 mutation 처리 및 기능 보완
- [[Ch5 -> Ch6 비교]](https://github.com/roy-jung/api-practice/pull/13/files)

### 7. 기타

- LowDB

  - [[Ch3 -> LowDB Rest 비교]](https://github.com/roy-jung/api-practice/pull/14/files)
  - [[Ch6 -> LowDB GraphQL 비교]](https://github.com/roy-jung/api-practice/pull/15/files)

- json-server
  - [[LowDB Rest -> JSON Server 비교]](https://github.com/roy-jung/api-practice/pull/16/files)


### 8. TypeScript 적용 버전
  - REST: https://github.com/roy-jung/api-practice/tree/ts-ch3
    - [Ch3 -> TypeScript 비교](https://github.com/roy-jung/api-practice/pull/17/files)
  - GraphQL: https://github.com/roy-jung/api-practice/tree/ts-ch6
    - [Ch6 -> TypeScript 비교](https://github.com/roy-jung/api-practice/pull/18/files)
