import './Home.css';

import logo from '../../assets/Logo.png'

const Home = () => {
    return (
      <div className="home animate__animated animate__fadeIn">
         <img src={logo} alt="Logo Food News"/>
         <h1>Welcome to <span className='typewriter'>Food News</span></h1>
         <p>The best page to create and see news about food</p>
         <button>Create a new news</button>
      </div>
    )
  }
  
  export default Home