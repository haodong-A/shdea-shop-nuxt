export function useCart() {
  const cart = useState<User.Cart | null>('cart', () => null)
}
