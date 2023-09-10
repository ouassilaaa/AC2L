import React from 'react';

const SectionType = ({icon,title,className}) => {
    return (
        // créer un dynamisme pour nos differentes sections qu'on pourra réutiliser dans chaque component souhaité
        <div className={`section__head ${className}`}>
                    <span>{icon}</span>
                    <h2>{title}</h2>
                </div>
    );
};

export default SectionType;