import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './tokens/dcs-tokens.css'
import './styles/global.scss'

// GitHub Pages is a public component showcase and has no RCL authentication cookie.
// Seed the shared template with a preview-only user so it does not redirect to
// the production session-expired page.
if (window.location.hostname === 'patchanan-ch.github.io') {
  document.cookie = 'RCL_AUTH_KEY=github-pages-preview; path=/';
  if (!window.sessionStorage.getItem('currentUser')) {
    const previewUser = {
      agent: 'Preview',
      trade: 'Preview',
      line: 'Preview',
      userId: 'github-pages-preview',
      fscCode: 'R',
      descr: 'GitHub Pages Preview',
      userToken: 'github-pages-preview',
      deptCode: 'Preview',
      orgType: null,
      orgCode: null,
    };
    window.sessionStorage.setItem('currentUser', window.btoa(JSON.stringify(previewUser)));
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
