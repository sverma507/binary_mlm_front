import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CryptolListing() {
    const [data, setData] = useState([]); // Ensure data is initialized as an empty array.

    const getList = async () => {
        try {
            const result = await axios.get(
                `${process.env.REACT_APP_API_URL}/user/crypto-listing`
            );
            // Assuming the API response structure contains `data.data` which is an array.
            if (result.data ) {
                setData(result.data.data);

            } else {
                setData([]); // Set to empty array if the data is not as expected.
            }
        } catch (error) {
            console.error("Error fetching listing data: ", error);
        }
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <div>
            <h1>Crypto Listings</h1>
            <table className="table-auto w-full border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Symbol</th>
                        <th className="border px-4 py-2">Rank</th>
                        <th className="border px-4 py-2">Total Supply</th>
                        <th className="border px-4 py-2">Max Supply</th>
                        <th className="border px-4 py-2">Circulating Supply</th>
                        <th className="border px-4 py-2">Date Added</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((crypto, index) => (
                            <tr key={crypto.id}>
                                <td className="border px-4 py-2">{crypto.name}</td>
                                <td className="border px-4 py-2">{crypto.symbol}</td>
                                <td className="border px-4 py-2">{crypto.cmc_rank}</td>
                                <td className="border px-4 py-2">{crypto.total_supply}</td>
                                <td className="border px-4 py-2">{crypto.max_supply || 'N/A'}</td>
                                <td className="border px-4 py-2">{crypto.circulating_supply}</td>
                                <td className="border px-4 py-2">{new Date(crypto.date_added).toLocaleDateString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center py-4">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default CryptolListing;
