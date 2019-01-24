<template>
    <div>
        
        <form @submit.prevent="tambahPegawai()">
            <table border="1px">
                <tr>
                    <td>Nama</td>
                    <td><input v-model="datapegawai.nama"></td>
                </tr>
                <tr>
                    <td>NIP</td>
                    <td><input v-model="datapegawai.nip"></td>                    
                </tr>
            </table>
            <button type="submit">Simpan</button>
        </form>
        <p>Nama is: {{ datapegawai.nama }}</p>
        <p>NIP is: {{ datapegawai.nip }}</p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props: {'msg':Object},
    data: function(){
        return {
            datapegawai:{}
        };      
    },
    mounted:function() {
        if (this.msg) {
            this.datapegawai = this.msg    
        }
        console.log("berhasil passing " + this.msg);

    },

    methods:{
        tambahPegawai:function(){            
            axios
                .post(
                    'http://localhost:8090/pegawai'
                    ,this.datapegawai                
                )
                .then(response=>{this.$router.push('/pegawai')})
                .catch(e => {this.errors.push(e)})       
            console.log("berhasil tambah " + this.datapegawai 
            /* + "nama " + this.datapegawai.nama + " nip " + this.datapegawai.nip */
            )
            
        }
    }


}
</script>

