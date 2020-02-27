import React, {useContext} from 'react';
import LoaderContext from '../../utils/contexts/LoaderContext';
import './loader.styles.css';

const LoaderComponent = () => {
    const {loaderFlag} = useContext(LoaderContext);

    return (
        <React.Fragment>
            {   
                loaderFlag.showLoader ? (
                    <div className='loader'>
                    </div>
                ) : null
            }
        </React.Fragment>
        
    );
}

export default LoaderComponent;