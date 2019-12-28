'use strict';


export default {
    template: `
        <header class="flex space-between align-c">
            <h1 class="logo">appSus</h1>
            <div class="flex site-nav">
                <i @click="openNav()" class="main-app-icon fas fa-th"></i>
                <div :class="{'display-icons':iconShow}" class="nav-icons" >
                    <router-link to="/"><i class="fas fa-home"></i></router-link> 
                    <router-link to="/email"><i class="fas fa-envelope-square"></i></router-link>  
                    <router-link to="/keep"><i class="far fa-sticky-note"></i></router-link>  
                </div>  
            </div>
            <nav> 
                <router-link to="/" class="nav-link"> Home page</router-link> 
                <router-link to="/keep" class="nav-link" >Keep app </router-link> 
                <router-link to="/email" class="nav-link" >Email app</router-link> 
                <router-link to="/books" class="nav-link" >Books app</router-link> 
            </nav>
        </header>
        
        `,
    data() {
        return {
            showNav: true,
            iconShow: false,
            isDisplay: false
        }
    },
    methods: {
        onToggleMenu() {
            this.showNav = !this.showNav;
            console.log('this.showNav', this.showNav);
        },
        openNav() {
            this.iconShow = !this.iconShow
            this.isDisplay = !this.isDisplay
        }
    },
}