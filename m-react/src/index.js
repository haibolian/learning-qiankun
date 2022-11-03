import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

let root = null

function render({container}) {
  root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.getElementById('root'));
  root.render(
    <BrowserRouter basename={ container ? 'react' : '/' }>
      <App />
    </BrowserRouter>
  );
}

if(!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap(){

}

export async function mount(props){
  render(props)
}


export async function unmount(props) {
  const { container } = props;
  // ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}