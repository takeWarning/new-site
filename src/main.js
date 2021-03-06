import 'bootstrap';
import './scss/main.scss';
import Vue from 'vue';
import VueHead from 'vue-head'
import VueAnalytics from 'vue-analytics';
import App from './App.vue';

function startApp() {
  // Set up META tags for device viewport (responsiveness)
  const firstMeta = document.getElementsByTagName('meta')[0];
  const viewportMeta = document.createElement('meta');
  viewportMeta.name = "viewport";
  viewportMeta.content = "width=device-width, initial-scale=1, shrink-to-fit=no";
  firstMeta.parentNode.insertBefore(viewportMeta, firstMeta.nextSibling);

  // Ensure there is a <div> to attatch our app to
  if(document.getElementById('app') === null) {
    const appDiv = document.createElement('div')
    appDiv.id = 'app';
    document.body.appendChild(appDiv);
  }
  Vue.use(VueHead);
  Vue.use(VueAnalytics, {
    id: GA_ID
  })
  // Initialize app
  new Vue({
    el: '#app',
    render: h => h(App)
  });
}

window.addEventListener('load', startApp);
