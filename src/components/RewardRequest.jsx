import { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet, Link, useLocation } from 'react-router-dom';

function RequestReward() {
    const API_URL = 'http://localhost:7000/transactions';
    const location = useLocation();
    const [transactions, setTransactions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const response = await axios.get(API_URL);
            if (response.status === 200 && Array.isArray(response.data.transactions)) {
                setTransactions(response.data.transactions);
            } else {
                console.error('Unexpected data format:', response.data);
                alert('An error occurred: Unexpected data format');
            }
        } catch (err) {
            console.error('Error fetching transactions:', err);
            alert('An error occurred while fetching transactions');
        }
    };

    const handleAccept = async (id) => {
        try {
            await axios.put(`${API_URL}/${id}`, { isAccepted: true });
            setTransactions((prevTransactions) =>
                prevTransactions.map((transaction) =>
                    transaction._id === id
                        ? { ...transaction, isAccepted: true }
                        : transaction
                )
            );
        } catch (err) {
            console.error('Error accepting transaction:', err);
            alert('An error occurred while accepting the transaction');
        }
    };

    const handleDecline = async (id) => {
        try {
            await axios.put(`${API_URL}/${id}`, { isAccepted: false });
            setTransactions((prevTransactions) =>
                prevTransactions.map((transaction) =>
                    transaction._id === id
                        ? { ...transaction, isAccepted: false }
                        : transaction
                )
            );
        } catch (err) {
            console.error('Error declining transaction:', err);
            alert('An error occurred while declining the transaction');
        }
    };

    

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredTransactions = transactions.filter((transaction) =>
        transaction.userId.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <h1 className='headings'>Management</h1>

            <nav className="nav">
                <ul className="navList">
                    <li>
                        <Link to="/Manage">
                            <button className={location.pathname === "/Manage" ? "active-btn" : "inactive-btn"}>
                                Reward Management
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Request">
                            <button className={location.pathname === "/Request" ? "active-btn" : "inactive-btn"}>
                                Requesting for Reward
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Transaction">
                            <button className={location.pathname === "/Transaction" ? "active-btn" : "inactive-btn"}>
                                Transaction
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Recycleables">
                            <button className={location.pathname === "/Recycleables" ? "active-btn" : "inactive-btn"}>
                                Recycleable Materials Data
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by User ID"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            <div className="table-container">
                <table className="w3-table-all">
                    <thead>
                        <tr className="w3-light-grey">
                            <th>User ID</th>
                            <th>Transaction Name</th>
                            <th>Price</th>
                            <th>Reference No.</th>
                            <th>Status</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.map((transaction) => (
                            <tr key={transaction._id}>
                                <td>{transaction.userId}</td>
                                <td>{transaction.transactionName}</td>
                                <td>{transaction.transactionPrice}</td>
                                <td>{transaction.referenceNo}</td>
                                <td className="action-buttons">
                                    {transaction.isAccepted === true ? (
                                        <span className='status'>Accepted</span>
                                    ) : transaction.isAccepted === false ? (
                                        <span className='status'>Declined</span>
                                    ) : (
                                        <>
                                            <button onClick={() => handleAccept(transaction._id)} >
                                                Accept
                                            </button>
                                            <button onClick={() => handleDecline(transaction._id)} >
                                                Decline
                                            </button>
                                        </>
                                    )}

                                    
                                </td>
                              
                             
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default RequestReward;
