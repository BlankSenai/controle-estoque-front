import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '@/views/StoreView.vue'
import ProductView from '@/views/ProductView.vue'
import MovesView from '@/views/MovesView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lojas',
      name: 'lojas',
      component: HomeView
    },
    {
      path: '/loja/:id',
      name: 'loja',
      component: StoreView
    },
    {
      path: '/:loja/produto/:id',
      name: 'produto',
      component: ProductView
    },
    {
      path: '/:loja/:produto/movimentacoes',
      name: 'movimentos',
      component: MovesView
    },
    {
      path: '/entrar',
      name: 'entrar',
      component: LoginView
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: SignUpView
    }
  ]
})

export default router
