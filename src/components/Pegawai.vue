<template>
    <div>
        <table border="1px">
            <thead>
                <td>No</td>
                <td>Nama</td>
                <td>NIP</td>
            </thead>
            <tbody>
                <tr v-for="datapegawai in datapegawais">
                    <td>Isi No</td>
                    <td>{{datapegawai.nama}}</td>
                    <td>{{datapegawai.nip}}</td>
                </tr>
            </tbody> 
        </table>
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
        axios
            .get('http://localhost:8090/pegawai')
            .then(response=>{this.datapegawais=response.data})
            .catch(e => {this.errors.push(e)
    })
    }
}
</script>

