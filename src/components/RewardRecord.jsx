import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";

function RewardRecord() {
    const API_URL = 'http://localhost:7000/rewards';
    const [Reward, setRewards] = useState([]);

    useEffect(() => {
        fetchReward();
    }, []); // Add an empty dependency array to ensure this runs only once on mount

    const fetchReward = async () => {
        try {
            const response = await axios.get(API_URL);

            if (response.status === 200 && Array.isArray(response.data.rewards)) {
                setRewards(response.data.rewards);
            } else {
                console.error('Unexpected data format:', response.data);
                alert('An error occurred: Unexpected data format');
            }
        } catch (err) {
            console.error('Error fetching rewards:', err);
            alert('An error occurred while fetching rewards');
        }
    };

    return (
        <>
        

          <nav>
            <ul >
            <li >
                <Link to="/Record" >
                  <button >
                    <span role="img" aria-label="record">📋</span> Record
                  </button>
                </Link>
              </li>
              <li >
                <Link to="/Manage" >
                  <button >
                    <span role="img" aria-label="edit">✏️</span> Edit Reward
                  </button>
                </Link>
              </li>
              <li >
                <Link to="/Add" >
                  <button >
                    <span role="img" aria-label="add">➕</span> Add Reward
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
      
        
            
            <br />
            <table className="w3-table-all">
                <thead>
                    <tr className="w3-light-grey">
                        <th>Reward</th>
                        <th>Reward Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {Reward.map(reward => (
                        <tr key={reward._id}>
                            <td>🖼️</td>
                            <td>{reward.RewardName}</td>
                            <td>{reward.Category}</td>
                            <td>{reward.Quantity}</td>
                            <td>{reward.Price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default RewardRecord;
