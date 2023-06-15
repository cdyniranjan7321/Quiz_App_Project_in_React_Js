import LandingPage from '@/components/LandingPage'
import axios from 'axios'

async function getPosts() {
  // const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)

  // if (!res.ok) {
  //   console.log(res)
  // }
  // return res.json()

  await axios
    .get(`${process.env.BASE_URL}/api/getPosts`)
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
}

export default async function Home() {
  const data = await getPosts()
  console.log('data : ', data)
  return (
    <main className=' '>
      <LandingPage />
    </main>
  )
}
