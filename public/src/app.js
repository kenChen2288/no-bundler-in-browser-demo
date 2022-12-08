import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    function plus() {
      count.value++
    }

    function minus() {
      count.value--
    }

    return { count, plus, minus }
  },
  template: `
    <div>
      <div>count is {{ count }}</div>
      <div>
        <button @click="plus">+</button>
        <button @click="minus">-</button>
      </div>
    </div>
  `,
}
