import React from 'react';
export function withLogger(WrappedComponent){
    return (props) => {
        const logger = {
            info: function(params){
                console.log("INFO LEVEL", params);
            },
            error: function(params){
                console.log("ERROR LEVEL", params);
            }
        }
        return (
            <WrappedComponent {...props} logger={logger} />
        );
    }

}