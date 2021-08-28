<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style lang="css">
  /* Body */
  body {
    background-color: #233140 !important;
  }

  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .no-padding {
    padding: 0 !important;
    margin: 0 !important;
  }

  /* Navbar */
  .nav-link{
    color: rgb(203, 203, 203) !important;
  }
  .nav-link:hover{
    color: rgb(255, 255, 255) !important;
  }
  .dropdown-item:hover{
    background-color: #469fff !important;
    color: white !important;
  }

  #editor_canvas {
    border-right: 1px solid #9a9a9a;
    border-bottom: 1px solid #9a9a9a;
  }

  /* Areas */
  .editor-area{
    padding: 0em 0em 0em 0em !important;
    overflow: auto;
    /* max-height: 512px; */
  }
  .tileset-area{
    padding: 0em 0em 0em 0.0em !important;
    /* padding: 0em 0em 0em 0.1em !important; */
  }


  /* Rows */
  .s-row-1{
    /* border-bottom: 1px solid #e1e2e3; */
    padding: 5px 5px 5px 2.5px;
  }
  .s-row-2{
    border-bottom: 1px solid #e0e1e2;
  }
  .s-row-3{
    box-shadow: 0px 2px 12px -1px rgba(0,0,0,0.4);
  }

  /* Cols */
  .s-col-1{
    border-right: 1px solid #0061c9;
  }
  .s-col-2{
    border-right: 1px solid #c3c4c5;
  }
  .s-col-3{
    border-right: 1px solid #c3c4c5;
  }

  /* Status */
  .tileset_status{
    color: white;
  }

 


  /* Navbar */
  .navbar-nav {
    flex-direction: row;
  }
  .nav-link {
    padding-right: .5rem !important;
    padding-left: .5rem !important;
  }
  .ml-auto .dropdown-menu {
    left: auto !important;
    right: 0px;
  }

  .colorinput{
    background: transparent;
    width: 100%;
    height: 100%;
  }

  input[type="text"]:invalid{
    background: #c33131;
    color: #fff;
  }
</style>