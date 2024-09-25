import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import axios from 'axios';
import Layout from '../../components/layout/layout';

const UserTree = () => {
  const [treeData, setTreeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const rootUserId = '66f2e435af0d7a38f2fa9a4c'; // The root user ID

  // Helper function to map user data to tree structure
  const buildTree = (users, userId) => {
    const user = users.find(u => u._id === userId);
    if (!user) return null;

    // Special handling for root user
    if (user._id === rootUserId) {
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
      attributes: {
        earningWallet: user.earningWallet,
        rank: user.rank,
        isActive: user.isActive ? 'Active' : 'Inactive',
      },
      children: [
        user.leftChild ? buildTree(users, user.leftChild) : null,
        user.rightChild ? buildTree(users, user.rightChild) : null,
      ].filter(Boolean), // Removes null values if there are no children
    };
  };

  useEffect(() => {
    const fetchUserTree = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/all-users`);
        const users = response.data;
        console.log(users);

        const tree = buildTree(users, rootUserId);

        setTreeData([tree]); // Wrap in array because react-d3-tree expects an array
        setLoading(false);
      } catch (err) {
        setError('Error fetching user tree');
        setLoading(false);
      }
    };

    fetchUserTree();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!treeData || treeData.length === 0 || !treeData[0]) {
    return <p>No tree data available.</p>;
  }

  // Render the user tree using react-d3-tree
  return (
    <Layout>
      <div style={{ width: '100%', height: '600px' }}>
        <Tree
          data={treeData}
          orientation="vertical"  // Vertical tree layout
          translate={{ x: 600, y: 200 }} // Adjust translation to center the tree
          nodeSize={{ x: 400, y: 300 }}  // Increase node size to allow more spacing
          pathFunc="diagonal" // Diagonal lines between nodes
          renderCustomNodeElement={({ nodeDatum, toggleNode }) => (
            <g>
              {/* Circle for each node */}
              <circle r="65" fill="white" stroke="black" strokeWidth="4" /> {/* White nodes with thicker borders */}
              <text fill="black" strokeWidth="0.1" x="-40" y="-10">
                {nodeDatum.name}
              </text>
              {/* Display user attributes only if available */}
              {nodeDatum.attributes && (
                <>
                  <text fill="black" strokeWidth="0.3" x="-40" y="20">
                    Wallet: Rs.{nodeDatum.attributes.earningWallet}
                  </text>
                </>
              )}
            </g>
          )}
          // To customize the link (line) style between nodes
          styles={{
            links: {
              stroke: 'black', // Line color
              strokeWidth: 3,  // Line thickness
            },
          }}
        />
      </div>
    </Layout>
  );
};

export default UserTree;
