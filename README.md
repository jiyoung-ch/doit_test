# URL




# log


## git 명령어

```
git init // 최초 한번 - git 저장소 만들기

git status // 현재 폴더 상태 확인
git add . // 현재 폴더 수정 사항 모두 tracking
git commit -m '커밋메시지' // 등록된 tacking 파일 commit (git add로 등록된)
git log // commit history 확인
git push origin master // [origin] 이라는 서버에 [master] 라는 branch 로 로컬파일 전송

git pull origin master // [origin] 이라는 서버의 [master] 라는 branch 를 로컬에 다운로드

git remote add

```





```javascript
$('#aaa').css('display', 'block');
```





## flow


1. local 에서 git 저장소 생성 //로컬 저장소 만들기
2. local 에서 git add
3. local 에서 git commit
4. github 에서 원격 저장소 만들기
5. local git 저장서에 원격 저장소 연결하기
> git remote add origin https://github.com/jiyoung-ch/doit_test.git
6. local -> 원격 저장소(github) 로 push 하기
> git push -u origin master
7. 원격 저장소(github) -> local 다운로드
> git pull origin master




### 깃 작업 파일 열때 .git 폴더있는 상태에서 열기
(->git 폴더가 최상단에 있어야함 )