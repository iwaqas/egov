import React, { useState } from 'react';
import { Shield, Vote, BarChart3, MessageSquare, Brain, Lock } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import VotingSystem from './components/VotingSystem';
import Feedback from './components/Feedback';
import Profile from './components/Profile';
import Chatbot from './components/Chatbot';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'voting' && <VotingSystem />}
        {activeTab === 'feedback' && <Feedback />}
        {activeTab === 'profile' && <Profile />}
      </main>

      <Chatbot />

      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security
              </h3>
              <p className="text-gray-600">
                Your data is protected with enterprise-grade encryption and multi-factor authentication.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                AI-Powered
              </h3>
              <p className="text-gray-600">
                Advanced AI algorithms analyze trends and provide insights for better governance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Privacy
              </h3>
              <p className="text-gray-600">
                Compliant with international data protection regulations.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;