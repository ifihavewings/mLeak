const Home = r => require.ensure([],()=> r(require('./Home.vue')),'Home')

export default [
  {
     path: '/', redirect: '/Home' 
  },
  {
    path : '/home',
    name : 'Home',
    component : Home,
  },
]