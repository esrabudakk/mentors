import React, {  useEffect } from "react";

const Protected = ({token}) => {

    console.log(token)

    useEffect(() => {
    }, []);

    return <div>Protected</div>
};

export default Protected;