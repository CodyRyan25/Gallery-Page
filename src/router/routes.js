
import MainLayout from 'layouts/MainLayout.vue'
import MainPage from 'pages/Index.vue'
import InfoPage from 'pages/Info.vue'
import GalleryPage from 'pages/Gallery.vue'

const routes = [
  {
    path: '', component: MainLayout,
    children: [
      { path: '', component: MainPage},
      { path: '/info', component: InfoPage},
      { path: '/gallery', component: GalleryPage}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
