<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light container">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNav">
     
    <ul class="navbar-nav">
     
        <router-link to="/" tag="li" class="nav-item">
            <a class="nav-link">Home</a>
        </router-link>
        <router-link to="/signup" tag="li" class="nav-item">
            <a class="nav-link">Sign Up</a>
         </router-link>
         <router-link to="/login" tag="li" class="nav-item">
            <a class="nav-link">Login</a>
         </router-link>
    </ul>
  
  </div>
     
</nav>

</template>

<script>



export default {
    data(){
      return {
        
      }
    },
    methods:{
      
    }
}
</script>


<style scoped>

</style>