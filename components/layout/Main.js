/** Components */
import Navigation from '../Navigation';

/** Component */
const MainLayout = ( props ) => (
    <div>
        <Navigation />
        <div>
            { props .children }
        </div>
    </div>
);

export default MainLayout;