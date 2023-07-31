import Image from 'next/image'
import { Inter } from 'next/font/google'
// import image from "/portrait.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <main className='hero'>
        <div className='left'>
          <h1 style={{ margin: 0 }}>Hello, my name is <br />
            Ria Cho. </h1>
          <h2>I build things for the web and mobile</h2>
          <p>I am a front-end engineer who specialies in building products with high end-user empathy and accessibility. Currently, I am working on x, y, z. </p>
          <button>Contact me</button>
        </div>
      </main>

      <section>
        <h2>About Me</h2>
        <p>Ipsem lorem text placeholder about my background</p>
      </section>

      <section>
        <h2>Portfolio grid section</h2>
        {/* <div className='portfolio-grid'>
          <div className='item'>Item</div>
          <div className='item'>Item</div>
          <div className='item'>Item</div>
          <div className='item'>Item</div>

        </div> */}

        <div className="container">
          <div className='item'>
            <h3>Project Name</h3>
            <p>Description</p>
          </div>

          <div className='item'>
            <h3>Project Name</h3>
            <p>Description</p>
          </div>

          <div className='item'>
            <h3>Project Name</h3>
            <p>Description</p>
          </div>

          <div className='item'>
            <h3>Project Name</h3>
            <p>Description</p>
          </div>

          <div className='item'>
            <h3>Project Name</h3>
            <p>Description</p>
          </div>
        </div>
      </section>
    </div >

  )
}
