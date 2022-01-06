import { createApp, defineComponent, h } from 'vue'
import { env } from './env'

console.log('[ env ]', env)

const app = createApp(
  defineComponent({
    data: () => ({ env }),
    render() {
      return h('h1', 'env: ' + String(this.env))
    }
  })
)
app.mount('#app')
