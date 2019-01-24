<template>
    <div>
        <router-link to="form" append> Tambah</router-link>
        <router-view></router-view>
        
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data: function(){
        return {
            msg:''
        }     
    },

    created: function (){
        console.log('sudah berhasil ya '+this.msg)
    }

    
    


}
</script>