import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';

const Layout = (Page, pageName) => {
    return () => (
        <div>
            <Navigation active={pageName} />
            <Page />
            <Footer />
        </div>
    );
};

export default Layout;
