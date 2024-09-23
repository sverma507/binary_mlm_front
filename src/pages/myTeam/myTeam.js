import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import axios from 'axios';
import Layout from '../../components/layout/layout';

const UserTree = () => {
  const [treeData, setTreeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to map user data to tree structure
  const buildTree = (users, userId) => {
    const user = users.find(u => u._id === userId);
    if (!user) return null;

    return {
      name: user.email,
      attributes: {
        wallet: user.wallet,
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

        // Assuming the root user ID is known, for example, "66f18b6d2661f21cf1418e8c"
        const rootUserId = '66f1a4489496a0a3b9e400b0';
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
        translate={{ x: 300, y: 100 }} // Adjust translation to center the tree
        nodeSize={{ x: 200, y: 200 }}  // Increase node size to allow more spacing
        pathFunc="diagonal" // Diagonal lines between nodes
        renderCustomNodeElement={({ nodeDatum, toggleNode }) => (
          <g>
            {/* Circle for each node */}
            <circle r="15" fill="white" stroke="black" strokeWidth="2" />
            <text fill="black" strokeWidth="0.5" x="-10" y="5">
              {nodeDatum.name}
            </text>
            {/* Display user attributes */}
            <text fill="black" x="20" y="20">
              Wallet: {nodeDatum.attributes.wallet}
            </text>
            <text fill="black" x="20" y="35">
              Rank: {nodeDatum.attributes.rank}
            </text>
            <text fill={nodeDatum.attributes.isActive === 'Active' ? 'green' : 'red'} x="20" y="50">
              {nodeDatum.attributes.isActive}
            </text>
          </g>
        )}
      />
    </div>
    </Layout>
  );
};

export default UserTree;
