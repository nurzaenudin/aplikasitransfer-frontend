import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pegawai from '@/components/Pegawai/'
import SemuaPegawai from '@/components/Pegawai/SemuaPegawai'
import FormPegawai from '@/components/Pegawai/FormPegawai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pegawai',
      name: 'Pegawai',
      component: Pegawai,
      children:[
        {
          path: '',
          name: 'SemuaPegawai',
          component: SemuaPegawai
          
        },
        {
          path: 'form',
          name: 'FormPegawai',
          component: FormPegawai,
          props:true
        }

      ]
    }
         
    
  ]
})
