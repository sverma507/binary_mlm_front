import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../AdminSidebar/Sidebar';
import Tree from 'react-d3-tree';
import toast from "react-hot-toast"
import './global.css'; // Import the global CSS file if needed

const DownlineUsers = () => {
  const [treeData, setTreeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [abc, setAbc] = useState('')
  const [userIdNew, setUserId] = useState('');
  // const [users, setUsers] = useState([]);

   // The root user ID

  // Helper function to map user data to tree structure
  const buildTree = (users, userId) => {
    console.log("user",users);
    const user = users.find((u) => u._id === userId);
    // toast(user.referralCode)
    console.log("singleUser",user);
    
    
    
    if (!user) return null;

    // Special handling for root user
    if (user._id === abc) {
      return {
        name: 'You', // Display "You" for the root user
        children: [
          user.leftChild ? buildTree(users, user.leftChild) : null,
          user.rightChild ? buildTree(users, user.rightChild) : null,
        ].filter(Boolean), // Removes null values if there are no children
      };
    }

    return {
      name: user.referralCode,
      email: user.email,
      attributes: {
        earningWallet: user.bullWallet,
        rank: user.rank,
        isActive: user.isActive ? 'Active' : 'Inactive',
      },
      children: [
        user.leftChild ? buildTree(users, user.leftChild) : null,
        user.rightChild ? buildTree(users, user.rightChild) : null,
      ].filter(Boolean), // Removes null values if there are no children
    };
  };

  const fetchUserTree = async () => {
    try {
      setLoading(true);
      setError(null); // Clear previous errors
      if (!userIdNew) {
        setError('Please enter a valid User ID.');
        setLoading(false);
        return;
      }

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/all-users`);
      const users = response.data;
      console.log(users);

      const userid = users.find((u) => u.referralCode === userIdNew);

      const rootUserId = userid._id;
      setAbc(userid._id)
      const tree = buildTree(users, rootUserId);

      if (!tree) {
        setError('No user found with the provided User ID.');
        
        setTreeData(null); // Set treeData to null if no user is found
      } else {
        setTreeData([tree]); // Wrap in array because react-d3-tree expects an array
      }
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Error fetching user tree.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen gap-4">
      <Sidebar className="fixed w-60 h-full" />
      <div className="ml-60 container mx-auto p-4">
        <div className="flex justify-between mb-10 mt-10">
          <input
            type="text"
            placeholder="Enter User ID"
            className="border-2 border-gray-200 rounded-lg p-2 w-[86%]"
            value={userIdNew}
            onChange={(e) => setUserId(e.target.value)}
          />
          <button
            className={`bg-green-500 text-white px-4 py-2 rounded-lg ml-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={fetchUserTree}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Get Downline'}
          </button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="relative h-screen">
          {loading && (
            <div className="spinner-overlay">
              <div className="spinner"></div>
            </div>
          )}

          {!loading && treeData ? (
            <Tree
              data={treeData}
              orientation="vertical" // Vertical tree layout
              translate={{ x: 600, y: 200 }} // Adjust translation to center the tree
              nodeSize={{ x: 400, y: 300 }} // Increase node size to allow more spacing
              pathFunc="diagonal" // Diagonal lines between nodes
              renderCustomNodeElement={({ nodeDatum }) => (
                <g>
                  <circle r="65" fill="white" stroke="black" strokeWidth="4" />
                  <text fill="black" fontWeight="bold" strokeWidth="0.1" x="-40" y="-10">
                    {nodeDatum.name}
                  </text>
                  {nodeDatum.attributes && (
                    <>
                      <text fill="black" fontWeight="bold" strokeWidth="0.3" x="-40" y="20">
                        Wallet:${nodeDatum.attributes.earningWallet}
                      </text>
                    </>
                  )}
                </g>
              )}
              styles={{
                links: {
                  stroke: 'white',
                  strokeWidth: 3,
                },
              }}
              pathClassFunc={() => 'custom-link'} // Use custom CSS class for links
            />
          ) : (
            !loading && !error && <p>No tree data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownlineUsers;
