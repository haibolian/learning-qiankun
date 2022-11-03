import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'm-vue',
    entry: '//localhost:8001',
    container: '#container',
    activeRule: 'vue'
  },
  // {
  //   name: 'm-react',
  //   entry: '//localhost:8002',
  //   container: '#container',
  //   activeRule: 'react'
  // }
])

start()