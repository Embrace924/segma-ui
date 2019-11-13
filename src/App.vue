<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/Input">Input</router-link>
            |
            <router-link to="/Select">Select</router-link>
            |
            <router-link to="/InputNumber">InputNumber</router-link>
            |
            <router-link to="/Button">Button</router-link>
            |
            <router-link to="/hello">hello</router-link>
            |
            <router-link to="/rangeSelect">rangeSelect</router-link>
            |
            <router-link to="/chartSwitching">chartSwitching</router-link>
        </div>
        <router-view class="segma-ui" />
    </div>
</template>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
