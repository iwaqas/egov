import React from 'react';
import { UserCircle, Mail, Phone, Shield, Key } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <UserCircle className="w-16 h-16 text-gray-400" />
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-600">Citizen ID: #123456789</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Personal Information</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <button className="text-sm text-indigo-600 hover:text-indigo-700">
              Edit Information →
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Security Settings</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Two-Factor Authentication Enabled</span>
              </div>
              <div className="flex items-center gap-3">
                <Key className="w-5 h-5 text-gray-400" />
                <span>Last Password Change: 2 months ago</span>
              </div>
            </div>

            <button className="text-sm text-indigo-600 hover:text-indigo-700">
              Manage Security Settings →
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">Voting History</h3>
        
        <div className="space-y-4">
          {[
            {
              election: 'City Council Election 2024',
              date: 'March 15, 2024',
              status: 'Completed'
            },
            {
              election: 'Environmental Policy Referendum',
              date: 'February 1, 2024',
              status: 'Completed'
            },
            {
              election: 'School Board Election',
              date: 'December 10, 2023',
              status: 'Completed'
            }
          ].map((vote) => (
            <div key={vote.election} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">{vote.election}</h4>
                <p className="text-sm text-gray-500">{vote.date}</p>
              </div>
              <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
                {vote.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;