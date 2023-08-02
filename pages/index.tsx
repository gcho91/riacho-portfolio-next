
import { IBM_Plex_Sans_Condensed } from 'next/font/google'

const ibmPlexSansCond = IBM_Plex_Sans_Condensed({
  weight: '600',
  subsets: ['latin']
})
// todo: make font utility file

export default function Home() {
  return (
    <div className='home-container'>
      <main className='hero'>
        <header className="header-section">
          <div className='container-head'>
            <div>
              <span>Ria cho</span>
            </div>
            <nav>
              <ul className='navbar-list'>
                <li>
                  <a href="index.html" className="nav-links">Home</a>
                </li>
                <li>
                  <a href="about.html" className="nav-links">About</a>
                </li>
                <li>
                  <a href="work.html" className="nav-links">Work</a>
                </li>
                <li>
                  <a href="./img/Gloria-Cho_August-2019-vC1.pdf" className="nav-links">Resume</a>
                </li>
              </ul>
            </nav>
          </div>


        </header>

        <div className='left'>
          <h1 className={ibmPlexSansCond.className} style={{ margin: 0 }}>Hello, my name is <br />
            Ria Cho. </h1>
          <h2>I build things for the web and mobile</h2>
          {/* <p>I am a front-end engineer who specialies in building products with high end-user empathy and accessibility. Currently, I am working on x, y, z. </p> */}
          <p>I am a front-end engineer with obsession for end-user empathy, and passion for learning accessibility. Currently, I am working on xyz.</p>
          <a className="cta-button">Contact me</a>
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
