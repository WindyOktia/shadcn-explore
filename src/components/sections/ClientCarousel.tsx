'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const clientLogos = [
    'https://via.placeholder.com/150x80?text=Client+1',
    'https://via.placeholder.com/150x80?text=Client+2',
    'https://via.placeholder.com/150x80?text=Client+3',
    'https://via.placeholder.com/150x80?text=Client+4',
    'https://via.placeholder.com/150x80?text=Client+5',
    'https://via.placeholder.com/150x80?text=Client+6',
];

export default function ClientsCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="my-12 px-4">
            <h2 className=" text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Trusted by Clients</h2>
            <Slider {...settings}>
                {clientLogos.map((logo, i) => (
                    <div key={i} className="px-4">
                        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-md rounded-xl flex justify-center items-center h-28">
                            <Image src={logo} alt={`Client ${i + 1}`} width={150} height={80} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
