https://www.youtube.com/watch?v=IwWQG6lEdQQ&t=1s
https://m.blog.naver.com/expellee1/221796531184

nextjs를 nginx와함께 pm2를 이용해서 배포하기

0. 깃헙에 프로젝트 올릴때 꼮!! public으로 해야함, 아니면 원격서버에 뭐 로긴하고, private키 등록하고 염병해야하면서 (fatal: could not read Username for 'https://github.com': No such device or address) 이런 에러뜸

1. 일단 서버다 구축하고 리버스 프록시로  ProxyPass          /   http://127.0.0.1:3333/ 으로 가게해둔다

2. 이아저씨는 ssh 키가지고 이것저것하는데 나는 모르겟다~~

3. 원격에 이제 접속안해도됨!