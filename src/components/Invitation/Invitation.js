import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../context/auth';
import Layout from '../../components/layout/layout';

function Invitation() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [user, setUser] = useState();
  const [invitationLink, setInvitationLink] = useState('');
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const generateInvitationLink = (walletAddress) => {
    const link = `${window.location.origin}/signup?referral=${walletAddress}`;
    setInvitationLink(link);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(invitationLink);
    setIsLinkCopied(true);
    toast('Invitation link copied to clipboard!', {
      duration: 4000, // Duration in milliseconds
      position: 'top-center', // Position of the toast
      style: {
        background: 'white',
        color: 'black',
      },
      icon: '👏', // Add a custom icon
    });

    // Revert the button text after 2 seconds
    setTimeout(() => {
      setIsLinkCopied(false);
    }, 2000);
  };

  useEffect(() => {
    console.log("d===>",auth);
    generateInvitationLink(auth?.user?.referralCode);
  }, []);

  return (
    <Layout title={'Invite - Earning Money'}>
      {/* <ToastContainer /> */}
      <div className=" mx-auto p-4 h-[400px] text-white mt-40">
        <div className="flex flex-col justify-center items-center text-lg">
          <div>Your Invitation Code</div>
          <div className="font-bold">{user?.referralCode}</div>
        </div>
        <div className="mt-4">
          <div>Dear Members, the following is your Invitation Link</div>
          <div className="flex flex-col justify-center items-center mt-2">
            <div className="w-4/5 border p-2 rounded-lg border-white">
              {invitationLink}
            </div>
            <div className="w-4/5">
              <button
                className={`rounded-full border-2 border-white bg-gradient-to-r from-purple-400 to-purple-600 text-white p-3 w-full mt-4 ${isLinkCopied ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={copyToClipboard}
                disabled={isLinkCopied}
              >
                {isLinkCopied ? 'Link Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Invitation;