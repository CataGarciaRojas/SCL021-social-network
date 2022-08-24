import { routes } from './routes/index.js';
import { nav } from '../components/bases/nav.js';

export const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  let href = event.target.href;
  if (!href) {
    href = event.target.parentElement.href;
  }
  window.history.pushState({}, '', href);
  handleLocation();
};

export const handleLocation = () => {
  const root = document.getElementById('root');
  const path = window.location.pathname;
  renderNav(path);
  root.innerHTML = routes[path] || routes.error404;
};

const renderNav = (path) => {
  const urlWithNav = ['/', '/training', '/feeding'];
  const match = urlWithNav.find((url) => url === path);
  match === undefined ? document.getElementById('nav').innerHTML = '' : nav();
};
