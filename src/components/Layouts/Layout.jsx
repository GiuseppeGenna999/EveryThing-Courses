import { TopNav } from "../TopNav/TopNav";
import { Footer } from "../Footer/Footer.jsx";
import { useOutlet } from "react-router-dom"; 

export function Layout(){

    const outlet = useOutlet();

    return(
        <>
            <TopNav />
            {outlet}
            <Footer />
        </>
    );
}