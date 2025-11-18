import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563]; // Coordinates of Bangladesh
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value.toLowerCase();
        const district = serviceCenters.find((c) =>
            c.district.toLowerCase().includes(location)
        );

        if (district) {
            const coord = [district.latitude, district.longitude];
            mapRef.current.flyTo(coord, 14);
        }
    };

    return (
        <div className="bg-white py-8 px-4 rounded-4xl md:px-12">
            <div className="container mx-auto">
                <div className="text-justify mb-6">
                    <h2 className="text-4xl font-bold text-primary mb-4 lg:text-5xl xl:text-[56px] ">
                        We are available in 64 districts
                    </h2>
                    <form onSubmit={handleSearch} className="relative max-w-md my-5 md:my-10 lg:my-[50px]">
                        <input
                            type="search"
                            name="location"
                            placeholder="Search here"
                            className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <svg
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                        <button className="absolute right-0 btn btn-accent rounded-lg!">Search</button>
                    </form>
                </div>
                <div className="relative w-full h-[400px] md:h-[650px]">
                  <h3 className='mb-5 text-xl font-extrabold md:mb-10 lg:mb-[50px] xl:text-3xl'>We deliver almost all over Bangladesh</h3>

                    <MapContainer
                        center={position}
                        zoom={8}
                        scrollWheelZoom={false}
                        className="h-[85%]! w-full rounded-lg"
                        ref={mapRef}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {serviceCenters.map((center, index) => (
                            <Marker
                                key={index}
                                position={[center.latitude, center.longitude]}
                            >
                                <Popup>
                                    <strong>{center.district}</strong> <br />
                                    Service Area: {center.covered_area.join(', ')}.
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Coverage;
