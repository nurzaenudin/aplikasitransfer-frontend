<template>
    <div>
        <table border="1px">
            <thead>
                <td>No</td>
                <td>Nama</td>
                <td>NIP</td>
                <td>&nbsp</td>
            </thead>
            <tbody>
                <tr v-for="datapegawai in datapegawais">
                    <td>{{datapegawai.id}}</td>
                    <td>{{datapegawai.nama}}</td>
                    <td>{{datapegawai.nip}}</td>
                    <td>
                        <button v-on:click="hapusPegawai(datapegawai.id)">Hapus</button>
                        <!-- <router-link :to="{ name: 'FormPegawai', params:datapegawai.id}" tag="button">Update</router-link> -->
                        <button v-on:click="updatePegawai(datapegawai)">Update</button>
                    </td>
                </tr>
            </tbody> 
        </table>

        
    </div>
</template>
<script>
import axios from 'axios';
import { log } from 'util';

export default {
    data: function(){
        return {
            datapegawais:[],
            msg:[]
        }     
    },

    created: function (){
        /*         
        axios
            .get('http://localhost:8090/pegawai')
            .then(response=>{this.datapegawais=response.data})
            .catch(e => {this.errors.push(e)}) 
        */
        this.getPegawai();
    },

    computed: {
        getFullPath:function () {
            return this.$route.path
        }
    },
    watch: {
        getFullPath:function () {
            this.getPegawai()
        }
    },

    methods:{
        getPegawai:function(){                      
            axios.get(
                'http://localhost:8090/pegawai/all',{
                    withCredentials: true,
                    auth: {
                        username: 'user001',
                        password: 'pass001'
                    }
                }
            )
                .then(response=>{this.datapegawais=response.data})
                .catch(e => {console.log("eror CORS")})            
         },
        hapusPegawai:function(tulisan){
            axios
                .delete('http://localhost:8090/pegawai/'+ tulisan)
                .then(
                    response=>{
                        const index = this.datapegawais.findIndex(datapegawai => datapegawai.id === tulisan) // find the index 
                        if (~index) // if exists in array
                        this.datapegawais.splice(index, 1) //delete the post
                    }
                )                           
                .catch(e => {this.errors.push(e)})
            console.log("berhasil hapus " + tulisan)
        },
        updatePegawai:function(tulisan){
/*             axios
                .delete('http://localhost:8090/pegawai/'+ tulisan)
                .then(
                    response=>{
                        const index = this.datapegawais.findIndex(datapegawai => datapegawai.id === tulisan) // find the index 
                        if (~index) // if exists in array
                        this.datapegawais.splice(index, 1) //delete the post
                    }
                )                           
                .catch(e => {this.errors.push(e)}) */
            
            
            this.msg=tulisan
            console.log("berhasil update " + this.msg)
            this.$router.push({ name: 'FormPegawai', params: {msg: this.msg }})
        },


    }


}
</script>

