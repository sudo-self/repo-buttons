import { DeployPlatform } from '../types';

export const deployPlatforms: DeployPlatform[] = [
  {
    id: 'netlify',
    name: 'Netlify',
    logo: 'Netlify',
    color: '#00AD9F',
    deployUrl: (username: string, repo: string) => 
      `https://app.netlify.com/start/deploy?repository=https://github.com/${username}/${repo}`,
    buttonMarkdown: (username: string, repo: string) => 
      `[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/${username}/${repo})`,
    buttonHtml: (username: string, repo: string) => 
      `<a href="https://app.netlify.com/start/deploy?repository=https://github.com/${username}/${repo}"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>`
  },
  {
    id: 'vercel',
    name: 'Vercel',
    logo: 'Vercel',
    color: '#000000',
    deployUrl: (username: string, repo: string) => 
      `https://vercel.com/new/clone?repository-url=https://github.com/${username}/${repo}`,
    buttonMarkdown: (username: string, repo: string) => 
      `[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/${username}/${repo})`,
    buttonHtml: (username: string, repo: string) => 
      `<a href="https://vercel.com/new/clone?repository-url=https://github.com/${username}/${repo}"><img src="https://vercel.com/button" alt="Deploy with Vercel"></a>`
  },
  {
    id: 'heroku',
    name: 'Heroku',
    logo: 'Cpu',
    color: '#430098',
    deployUrl: (username: string, repo: string) => 
      `https://heroku.com/deploy?template=https://github.com/${username}/${repo}`,
    buttonMarkdown: (username: string, repo: string) => 
      `[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/${username}/${repo})`,
    buttonHtml: (username: string, repo: string) => 
      `<a href="https://heroku.com/deploy?template=https://github.com/${username}/${repo}"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku"></a>`
  },
  {
    id: 'railway',
    name: 'Railway',
    logo: 'Train',
    color: '#0B0D0E',
    deployUrl: (username: string, repo: string) => 
      `https://railway.app/new/template?template=https://github.com/${username}/${repo}`,
    buttonMarkdown: (username: string, repo: string) => 
      `[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/${username}/${repo})`,
    buttonHtml: (username: string, repo: string) => 
      `<a href="https://railway.app/new/template?template=https://github.com/${username}/${repo}"><img src="https://railway.app/button.svg" alt="Deploy on Railway"></a>`
  },
  {
    id: 'render',
    name: 'Render',
    logo: 'Activity',
    color: '#46E3B7',
    deployUrl: (username: string, repo: string) => 
      `https://render.com/deploy?repo=https://github.com/${username}/${repo}`,
    buttonMarkdown: (username: string, repo: string) => 
      `[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/${username}/${repo})`,
    buttonHtml: (username: string, repo: string) => 
      `<a href="https://render.com/deploy?repo=https://github.com/${username}/${repo}"><img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render"></a>`
  },
  {
    id: 'digitalocean',
    name: 'DigitalOcean',
    logo: 'Droplets',
    color: '#0080FF',
    deployUrl: (username: string, repo: string) => 
      `https://cloud.digitalocean.com/apps/new?repo=https://github.com/${username}/${repo}`,
    buttonMarkdown: (username: string, repo: string) => 
      `[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/${username}/${repo})`,
    buttonHtml: (username: string, repo: string) => 
      `<a href="https://cloud.digitalocean.com/apps/new?repo=https://github.com/${username}/${repo}"><img src="https://www.deploytodo.com/do-btn-blue.svg" alt="Deploy to DO"></a>`
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare Workers',
    logo: 'Cloud',
    color: '#F38020',
    deployUrl: (username: string, repo: string) => 
      `https://deploy.workers.cloudflare.com/?url=https://github.com/${username}/${repo}`,
    buttonMarkdown: (username: string, repo: string) => 
      `[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/${username}/${repo})`,
    buttonHtml: (username: string, repo: string) => 
      `<a href="https://deploy.workers.cloudflare.com/?url=https://github.com/${username}/${repo}"><img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers"></a>`
  },
  {
    id: 'codesandbox',
    name: 'CodeSandbox',
    logo: 'Box',
    color: '#151515',
    deployUrl: (username: string, repo: string) => 
      `https://codesandbox.io/p/github/${username}/${repo}`,
    buttonMarkdown: (username: string, repo: string) => 
      `[![Open in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/${username}/${repo})`,
    buttonHtml: (username: string, repo: string) => 
      `<a href="https://codesandbox.io/p/github/${username}/${repo}"><img src="https://assets.codesandbox.io/github/button-edit-lime.svg" alt="Open in CodeSandbox"></a>`
  },
  {
    id: 'stackblitz',
    name: 'StackBlitz',
    logo: 'Zap',
    color: '#1389FD',
    deployUrl: (username: string, repo: string) => 
      `https://stackblitz.com/github/${username}/${repo}`,
    buttonMarkdown: (username: string, repo: string) => 
      `[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/${username}/${repo})`,
    buttonHtml: (username: string, repo: string) => 
      `<a href="https://stackblitz.com/github/${username}/${repo}"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open in StackBlitz"></a>`
  },
{
  id: 'glitch',
  name: 'Glitch',
  logo: 'Fish',
  color: '#EC0F8B',
  deployUrl: (username: string, repo: string) =>
    `https://glitch.com/edit/#!/import/github/${username}/${repo}`,
  buttonMarkdown: (username: string, repo: string) =>
    `[![Remix on Glitch](https://img.shields.io/badge/Remix_on_Glitch-EC0F8B?logo=glitch&logoColor=white&style=for-the-badge)](https://glitch.com/edit/#!/import/github/${username}/${repo})`,
  buttonHtml: (username: string, repo: string) =>
    `<a href="https://glitch.com/edit/#!/import/github/${username}/${repo}"><img src="https://img.shields.io/badge/Remix_on_Glitch-EC0F8B?logo=glitch&logoColor=white&style=for-the-badge" alt="Remix on Glitch"></a>`
},
{
  id: 'firebase',
  name: 'Firebase Hosting',
  logo: 'Flame',
  color: '#FFA000',
  deployUrl: (username: string, repo: string) =>
    `https://console.firebase.google.com/project/_/hosting/sites`,
  buttonMarkdown: (username: string, repo: string) =>
    `[![Deploy to Firebase](https://img.shields.io/badge/Deploy_to_Firebase-FFA000?logo=firebase&logoColor=white&style=for-the-badge)](https://console.firebase.google.com/project/_/hosting/sites)`,
  buttonHtml: (username: string, repo: string) =>
    `<a href="https://console.firebase.google.com/project/_/hosting/sites"><img src="https://img.shields.io/badge/Deploy_to_Firebase-FFA000?logo=firebase&logoColor=white&style=for-the-badge" alt="Deploy to Firebase"></a>`
},
  {
  id: 'replit',
  name: 'Replit',
  logo: 'Zap',
  color: '#667881',
  deployUrl: (username: string, repo: string) =>
    `https://replit.com/github/${username}/${repo}`,
  buttonMarkdown: (username: string, repo: string) =>
    `[![Run on Replit](https://img.shields.io/badge/Run_on_Replit-667881?logo=replit&logoColor=white&style=for-the-badge)](https://replit.com/github/${username}/${repo})`,
  buttonHtml: (username: string, repo: string) =>
    `<a href="https://replit.com/github/${username}/${repo}"><img src="https://img.shields.io/badge/Run_on_Replit-667881?logo=replit&logoColor=white&style=for-the-badge" alt="Run on Replit"></a>`
}
];

















