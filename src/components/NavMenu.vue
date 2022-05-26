<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Num</router-link> 
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
    
    <span class="navbar-toggler-icon"></span>
    
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
            <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
            Pride and Perjudice
            </a>

            
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                
                <li v-for="(item,index) in pridePerjudicePart1" :key=index>
                    <router-link :to="item.url" :class="['dropdown-item']">{{item.name}}</router-link>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li v-for="(item,index) in pridePerjudicePart2" :key=index>
                    <router-link :to="item.url" :class="['dropdown-item']">{{item.name}}</router-link>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li v-for="(item,index) in pridePerjudicePart3" :key=index>
                    <router-link :to="item.url" :class="['dropdown-item']">{{item.name}}</router-link>
                </li>
            </ul>
        </li>
        </ul>
        
    </div>
    </div>
</nav>
</template>

<script>
export default {
    name:"NavMenu",
    data:()=>{
        return {
            pridePerjudicePart1:[
            {name:"Chapter 1",url:"/pride_p1c1/part1/capter_01"},
            {name:"Chapter 2",url:"/pride_p1c2/part1/capter_02"},
            {name:"Chapter 3",url:"/pride_p1c3/part1/capter_03"}
            ],
            pridePerjudicePart2:[
            {name:"Chapter 1",url:"/about"},
            {name:"about",url:"/about"}
            ],
            pridePerjudicePart3:[
            {name:"Chapter 1",url:"/about"},
            {name:"about",url:"/about"}
            ]
        }
    }

}
</script>

<style>
nav a.router-link-exact-active {
  color: #DC2F02;
}
</style>