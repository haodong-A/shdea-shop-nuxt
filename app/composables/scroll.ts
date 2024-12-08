import Lenis from 'lenis'

export default function useSmoothScroll() {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
}
