import {useEffect, useState} from "react";
import DotGroup from './scenes/DotGroup'
import Landing from './scenes/Landing'
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from './scenes/Navbar';
import LineGradient from './components/LineGradient'
import MySkills from './scenes/MySkills'


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    useEffect(() => {
        const handleScroll =() => {
            window.scrollY === 0 ? setIsTopOfPage(true) : setIsTopOfPage(false)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

  return (
    <>
      <div className="app bg-deep-blue">
        <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} />
      </div>
        <div className='w-5/6 mx-auto md:h-full'>
            {isAboveMediumScreens && (
                <DotGroup
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
            )}
            <Landing setSelectedPage />
        </div>
        <LineGradient />
        <div className='w-5/6 mx-auto md:h-full'>
            <MySkills />
        </div>
    </>
  );
}

export default App;
