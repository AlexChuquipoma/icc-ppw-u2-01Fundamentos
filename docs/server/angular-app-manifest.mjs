
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/icc-ppw-u2-01Fundamentos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/icc-ppw-u2-01Fundamentos"
  },
  {
    "renderMode": 2,
    "route": "/icc-ppw-u2-01Fundamentos/perfil"
  },
  {
    "renderMode": 2,
    "route": "/icc-ppw-u2-01Fundamentos/proyectos"
  },
  {
    "renderMode": 2,
    "route": "/icc-ppw-u2-01Fundamentos/proyectos-dos"
  },
  {
    "renderMode": 2,
    "route": "/icc-ppw-u2-01Fundamentos/formulariopage"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 462, hash: '6a0f84038b7dcb4b44caa4809fea0be9bf561474e9ca30125c47047141185c41', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 975, hash: '1e461e11654a27b04b045917c860522e58f848df94726ff47f7b5c168a946824', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'proyectos/index.html': {size: 3084, hash: 'd0f479a9d2c463abedc533531223e2350bae4d964629640279b553e1b2979656', text: () => import('./assets-chunks/proyectos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2694, hash: 'ff613e60a58c359a211aeffc3c10817702dbefbbe24c567690f9cfb530bddd92', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'formulariopage/index.html': {size: 3680, hash: '305fae278ed1b363ceb85fd0fddcd160789ebc1705ce0445e986078cfbfe14d6', text: () => import('./assets-chunks/formulariopage_index_html.mjs').then(m => m.default)},
    'proyectos-dos/index.html': {size: 3114, hash: '34e3fdeb30648ac633bbc8c9cdebb8d33f28b701990f16ed3143fb4bf1644f0b', text: () => import('./assets-chunks/proyectos-dos_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 2877, hash: '6730156c0a93e6dc2347afa211760e028a9948800ab3183fd6e19b97abb5cb1d', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
