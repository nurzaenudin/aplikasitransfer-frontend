<template>
    <div>
        <form>
            <table border="1px">
                <tr>
                    <td>Nama</td>
                    <td></td>
                </tr>
                <tr>
                    <td>NIP</td>
                    <td></td>                    
                </tr>
            </table>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data: function(){
        return {
            datapegawais:[]
        };      
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

    methods:{
        getPegawai:function(){                      
            axios
                .get('http://localhost:8090/pegawai')
                .then(response=>{this.datapegawais=response.data})
                .catch(e => {this.errors.push(e)})            
            console.log("berhasil get")
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
     
        }

    }


}
</script>

