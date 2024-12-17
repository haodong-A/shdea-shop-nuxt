import Lenis from 'lenis'

export default function useScrollBody() {
  const { x, y, arrivedState, directions } = useScroll(window)
  const isScrollTop = ref()

  onMounted(() => {
    nextTick(() => {
      // eslint-disable-next-line no-new
      new Lenis({
        autoRaf: true,
      })
    })
  })
  watch(() => y.value, (value, oldValue) => {
    isScrollTop.value = value < oldValue
  })

  return {
    x,
    y,
    arrivedState,
    directions,
    isScrollTop,
  }
}
