import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return ( <>
    <Component {...pageProps} />
    <footer> &copy; {new Date().getFullYear()} Nouman</footer>
  </>)
}
