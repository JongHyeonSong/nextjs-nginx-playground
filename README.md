# 링크 https://next-sjh.kro.kr


https://www.youtube.com/watch?v=IwWQG6lEdQQ&t=1s
https://m.blog.naver.com/expellee1/221796531184

nextjs를 nginx와함께 pm2를 이용해서 배포하기

0. 깃헙에 프로젝트 올릴때 꼮!! public으로 해야함, 아니면 원격서버에 뭐 로긴하고, private키 등록하고 염병해야하면서 (fatal: could not read Username for 'https://github.com': No such device or address) 이런 에러뜸

1. 일단 서버다 구축하고 리버스 프록시로  ProxyPass          /   http://127.0.0.1:3333/ 으로 가게해둔다

2. 이아저씨는 ssh 키가지고 이것저것하는데 나는 모르겟다~~

3. 원격에 이제 접속안해도됨!

4. 중간에 역경이 몇개있는데 일단 public 해야되고

6. 그다음 기본설정에 upstream이 master로 되어있는데 그거 흑인때문에 안되고 이제 main으로 보통만들어짐
ref  : 'origin/main',


7. pm2 deploy production setup(pm2 deploy ecosystem.cofing.js production setup) 딱치고 대박좀 넣어주면 깃의 소스가 죄다 /home/next-sjh.kro.kr/nextjs/ 아래에 특히 거기서 source폴더안에 다생성된다

8. pm2 deploy production 하면 비번 입력 많이해야하긴한데 적었던 post-deploy에 있던게 죄다 원격에서 실행된다



9. 서버에가서 pm2 list 하면 인스턴스가 떠있다

10. 비번 계속쳐야되는데 비번 옵션으로 설정되냐고 누가물어봤는데
none, use a keyfile instead ^^

11. 루트안에 /current, /shared, /source가 있는데
작업을 때리는곳은 /current인데 symLink가 /source에 걸려있어서
echo $PWD 하면 /home/next-sjh.kro.kr/nextjs/current 나오는데
결국 /source에 모든 소스가 생긴다