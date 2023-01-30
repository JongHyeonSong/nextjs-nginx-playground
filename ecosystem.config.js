module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      user : 'root',
      password : 'eoqkr!@34',
      host : '210.180.118.158',
      ref  : 'origin/master',
      repo : 'https://github.com/JongHyeonSong/nextjs-nginx-playground.git', 
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && npm run build &&  pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
