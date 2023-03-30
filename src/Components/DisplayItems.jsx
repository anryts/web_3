import React from 'react';
import Item from '../Components/item';
import '../CSS/DisplayItems.css';

const items = [
    {
        name: 'Item 1',
        description: 'Lorem ipsum dolor sit amet',
        price: '$10',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Item 2',
        description: 'Consectetur adipiscing elit',
        price: '$20',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Item 3',
        description: 'Sed do eiusmod tempor incididunt',
        price: '$30',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Item 4',
        description: 'Ut labore et dolore magna aliqua',
        price: '$40',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Item 5',
        description: 'Ut enim ad minim veniam',
        price: '$50',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Item 6',
        description: 'Quis nostrud exercitation ullamco',
        price: '$60',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Item 7',
        description: 'Laboris nisi ut aliquip ex ea commodo',
        price: '$70',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Item 8',
        description: 'Duis aute irure dolor in reprehenderit',
        price: '$80',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Item 9',
        description: 'Excepteur sint occaecat cupidatat non',
        price: '$90',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Item 10',
        description: 'Proident, sunt in culpa qui officia',
        price: '$100',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Item 11',
        description: 'Lorem ipsum dolor sit amet',
        price: '$110',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Item 12',
        description: 'Consectetur adipiscing elit',
        price: '$120',
        image: 'https://via.placeholder.com/150'
    }
];

const DisplayItems = () => {
    return (
        <div className="container">
            <div className="row">
                {items.map((item, index) => (
                    <div key={index} className="col">
                        <Item
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayItems;
