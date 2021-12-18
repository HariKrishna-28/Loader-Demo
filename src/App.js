// import logo from './logo.svg';
import Demo from './components/Demo'
import GitHub from './assets/GitHub-Mark.png'
import Npm from './assets/Npm-logo.svg'

function App() {

  return (
    <>
      <header className="flex justify-center lg:justify-between bg-black text-center font-bold text-white py-4 text-2xl">
        <p className='lg:ml-5'>
          React Loading Animations
        </p>
        <div className='hidden lg:flex gap-2 mr-4 items-center'>
          <a href='https://github.com/HariKrishna-28/load-animations-react' target="_blank" rel="noreferrer">
            <img src={GitHub} width="40px" className='mr-2' style={{ borderRadius: "50%" }} alt='github' />
          </a>
          <a href='https://www.npmjs.com/package/load-animations-react' target="_blank" rel="noreferrer">
            <img src={Npm} width="60px" className='mr-2' alt='npm' />
          </a>
        </div>
      </header>
      <Demo />
    </>
  );
}

export default App;
