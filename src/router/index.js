import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pegawai from '@/components/Pegawai'
import FormPegawai from '@/components/FormPegawai'

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
      component: Pegawai
    },
    {
      path: '/pegawai/form',
      name: 'FormPegawai',
      component: FormPegawai
    }
  ]
})
