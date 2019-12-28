'use strict';

import router from './routes.js';
new Vue({
    router,
    el: '#my-app',
    template: `
        <section>
            <router-view></router-view>
        </section>
    `
})