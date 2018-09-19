const Parta1 = r => require.ensure([],()=> r(require('./Parta1.vue')),'Parta1')
const Parta2 = r => require.ensure([],()=> r(require('./Parta2.vue')),'Parta2')
const Parta3 = r => require.ensure([],()=> r(require('./Parta3.vue')),'Parta3')
const Parta4 = r => require.ensure([],()=> r(require('./Parta4.vue')),'Parta4')
const test1 = r => require.ensure([],()=> r(require('./test1.vue')),'test1')
const test2 = r => require.ensure([],()=> r(require('./test2.vue')),'test2')


export default [
  {
    path : '/parta1',
    name : 'Parta1',
    component : Parta1,
  },
  {
    path : '/parta2',
    name : 'Parta2',
    component : Parta2,
  },
  {
    path : '/parta3',
    name : 'Parta3',
    component : Parta3,
  },
  {
    path : '/parta4',
    name : 'Parta4',
    component : Parta4,
  },
  {
    path : '/test1',
    name : 'test1',
    component : test1,
  },
  {
    path : '/test2',
    name : 'test2',
    component : test2,
  },
]