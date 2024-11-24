import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const Feedback = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission
    setMessage('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">Public Feedback</h2>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Current Topics</h3>
            
            {['Public Transportation', 'Environmental Policy', 'Education Reform'].map((topic) => (
              <div key={topic} className="p-4 border rounded-lg hover:border-indigo-200 transition-colors">
                <h4 className="font-medium mb-2">{topic}</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Share your thoughts and suggestions about {topic.toLowerCase()} in our city.
                </p>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">
                  Participate →
                </button>
              </div>
            ))}
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Submit General Feedback</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="feedback"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Share your thoughts, suggestions, or concerns..."
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                <Send className="w-4 h-4" />
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">Recent Community Discussions</h3>
        
        <div className="space-y-4">
          {[
            {
              topic: 'Park Renovation Project',
              comments: 24,
              lastActive: '2 hours ago'
            },
            {
              topic: 'Traffic Management Plan',
              comments: 18,
              lastActive: '4 hours ago'
            },
            {
              topic: 'Waste Management Initiative',
              comments: 32,
              lastActive: '1 day ago'
            }
          ].map((discussion) => (
            <div key={discussion.topic} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">{discussion.topic}</h4>
                <p className="text-sm text-gray-500">Last active {discussion.lastActive}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MessageSquare className="w-4 h-4" />
                <span>{discussion.comments}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;