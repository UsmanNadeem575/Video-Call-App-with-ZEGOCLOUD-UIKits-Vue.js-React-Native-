import Vue from 'vue'
import VueRouter from 'vue-router'
import VideoCall from '@/components/VideoCall.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'VideoCall',
    component: VideoCall
  },
]

const router = new VueRouter({
  routes
})

export default router
