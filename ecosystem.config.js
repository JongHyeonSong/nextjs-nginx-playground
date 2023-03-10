module.exports = {
  apps : [{
    script: 'npm start',
    name: "nextjs-nginx-playground",
  }],

  deploy : {
    production : {
      user : 'root',
      password : 'eoqkr!@34',
      host : '210.180.118.158',
      ref  : 'origin/main',
      repo : 'https://github.com/JongHyeonSong/nextjs-nginx-playground.git', 
      path : '/home/next-sjh.kro.kr/nextjs',
      'pre-deploy-local': '',
      'post-deploy' : 'echo $PWD >> ii2.txt && npm install && npm run build &&  pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
