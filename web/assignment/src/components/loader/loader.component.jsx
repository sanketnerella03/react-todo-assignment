import React, {useContext} from 'react';
import LoaderContext from '../../context/LoaderContext';
import './loader.styles.css';

const LoaderComponent = () => {
    const {loaderFlag} = useContext(LoaderContext);

    return (
        <div>
            {   
                loaderFlag.showLoader ? (
                    <div className='loader'>
                    </div>
                ) : null
            }
        </div>
        
    );
}

export default LoaderComponent;