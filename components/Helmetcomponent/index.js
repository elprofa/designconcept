import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title} | DesigneKoncept</title>
            <meta name="description" content={description}/>
            <link rel="icon" href="/img/LogoDesignKoncep.png" />
        </Helmet>
    )
}
export default MetaData;