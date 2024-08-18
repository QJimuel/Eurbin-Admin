import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
function ManageReward() {
    const API_URL = 'http://localhost:7000/rewards';

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
  
    const [rewardId, setRewardId] = useState(null);
    const [Reward, setRewards] = useState([]);

    useEffect(() => {
        fetchReward(); 
    }, []); // Run only once on component mount
    
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
    }

    const createReward = async () => {
        try {
            const rawInput = {
                RewardName: name,
                Category: category,
                Quantity: parseInt(quantity, 10),
                Price: parseFloat(price)
            };

            const response = await axios.post(API_URL, rawInput);

            if (response.status === 201) {
                await fetchReward();
                clearInput();
            }
        } catch (err) {
            console.error('Error creating reward:', err);
            alert('An error occurred while creating the reward');
        }
    } 

    const updateReward = async () => {
        try {
            const rawInput = {
                RewardName: name,
                Category: category,
                Quantity: parseInt(quantity, 10),
                Price: parseFloat(price)
            };

            const response = await axios.put(`${API_URL}/${rewardId}`, rawInput);

            if (response.status === 200) {
                await fetchReward();
                clearInput();
            }
        } catch (err) {
            console.error('Error updating reward:', err);
            alert('An error occurred while updating the reward');
        }
    };

    const deleteReward = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/${id}`);

            if (response.status === 200) {
                await fetchReward();
            }
        } catch (err) {
            console.error('Error deleting reward:', err);
            alert('An error occurred while deleting the reward');
        }
    };

    const handleEditClick = (reward) => {
        setRewardId(reward._id);
        setName(reward.RewardName);
        setCategory(reward.Category);
        setQuantity(reward.Quantity.toString());
        setPrice(reward.Price.toString());
    };

    const clearInput = () => {
        setName('');
        setCategory('');
        setQuantity('');
        setPrice('');
        setRewardId(null); // Reset rewardId as well
    }

    return (
        <>
        <h1 className='headings'>Management</h1>
        
        <nav className="nav">
            <ul className="navList">
            <li >
                <Link to="/Record" >
                    <button >
                        Reward Management
                    </button>
                </Link>
            </li>
            <li >
                <Link to="/Manage" >
                    <button >
                        Requesting for Reward
                    </button>
                </Link>
            </li>
            <li >
                <Link to="/Add" >
                    <button >
                        Transaction
                    </button>
                </Link>
            </li>
            <li >
                <Link to="/Add" >
                    <button >
                        Recycleable Materials Data
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
            {/* 
            <table className="w3-table-all">
                <thead>
                    <tr className="w3-light-grey">
                        <th>Reward</th>
                        <th>Reward Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
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
                            <td>
                                <button onClick={() => handleEditClick(reward)}>Edit</button>
                                <button onClick={() => deleteReward(reward._id)}>Delete</button>
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
            <br /><br /><br />
            <h1>Edit Reward</h1>
            <table>
                <tbody>
                    <tr>
                        <td><label>Reward Name: </label></td>
                        <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Reward Category: </td>
                        <td><input type="text" value={category} onChange={(e) => setCategory(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Reward Quantity: </td>
                        <td><input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Reward Price: </td>
                        <td><input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={rewardId ? updateReward : createReward}>
                                {rewardId ? 'Update' : 'Create'}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            */}
        </>
    );
}

export default ManageReward;
