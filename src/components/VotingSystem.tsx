import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

const VotingSystem = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isVoted, setIsVoted] = useState(false);

  const handleVote = () => {
    if (selectedOption) {
      setIsVoted(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">Current Election</h2>
        
        <div className="space-y-4 mb-6">
          <h3 className="text-lg font-medium">City Council Election 2024</h3>
          <p className="text-gray-600">
            Cast your vote for the next city council representative. Your vote is secure and anonymous.
          </p>
          
          {!isVoted ? (
            <>
              <div className="space-y-3 mt-6">
                {['John Smith', 'Sarah Johnson', 'Michael Brown', 'Emily Davis'].map((candidate) => (
                  <label
                    key={candidate}
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors
                      ${selectedOption === candidate 
                        ? 'border-indigo-600 bg-indigo-50' 
                        : 'border-gray-200 hover:bg-gray-50'}`}
                  >
                    <input
                      type="radio"
                      name="candidate"
                      value={candidate}
                      checked={selectedOption === candidate}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="hidden"
                    />
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center
                      ${selectedOption === candidate 
                        ? 'border-indigo-600 bg-indigo-600' 
                        : 'border-gray-300'}`}
                    >
                      {selectedOption === candidate && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="ml-3">{candidate}</span>
                  </label>
                ))}
              </div>

              <button
                onClick={handleVote}
                disabled={!selectedOption}
                className={`mt-6 w-full py-3 px-4 rounded-md font-medium transition-colors
                  ${selectedOption
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              >
                Cast Vote
              </button>
            </>
          ) : (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2 text-green-600">
                <Check className="w-5 h-5" />
                <span className="font-medium">Vote cast successfully!</span>
              </div>
              <p className="mt-2 text-green-600">
                Your vote has been securely recorded. Thank you for participating in the democratic process.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2 text-blue-600">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">Important Information</span>
          </div>
          <ul className="mt-2 text-blue-600 list-disc list-inside space-y-1">
            <li>Your vote is completely anonymous</li>
            <li>You can only vote once in this election</li>
            <li>Results will be published after the voting period ends</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VotingSystem;