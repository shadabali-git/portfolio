import React from 'react';
interface CardsProps {
    src: string;
    height?: string;

}
const Cards:React.FC<CardsProps> = ({src,height}) => {
    return (
        <div className={`relative flex flex-col shadow-sm w-72`}>
            <div className={`relative ${height} overflow-hidden text-white`}>
                <img
                    src={src}
                    alt="card-image"/>
            </div>

        </div>
    );
}

export default Cards;