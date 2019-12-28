'use strict';

import mainHeader from './main-header.cmp.js';
import mainFooter from './main-footer.cmp.js';

export default {
    template: `
        <section class="home-page-container">
            <main-header></main-header>
            <div class="home-page-content flex both-align-c">
                <h1>welcome to AppSus</h1>
            </div>
            <main-footer></main-footer>

        </section>
    `,
    components: {
        mainHeader,
        mainFooter
    }

}