import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, ThumbsUp, Vote, MessageSquare } from 'lucide-react';

const data = [
  { name: 'Jan', votes: 4000 },
  { name: 'Feb', votes: 3000 },
  { name: 'Mar', votes: 2000 },
  { name: 'Apr', votes: 2780 },
  { name: 'May', votes: 1890 },
  { name: 'Jun', votes: 2390 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <StatCard
          title="Total Users"
          value="124,892"
          icon={Users}
          trend="+12.5%"
        />
        <StatCard
          title="Active Polls"
          value="23"
          icon={Vote}
          trend="+3"
        />
        <StatCard
          title="Feedback"
          value="8,432"
          icon={MessageSquare}
          trend="+892"
        />
        <StatCard
          title="Approval"
          value="87%"
          icon={ThumbsUp}
          trend="+2.4%"
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
        <h2 className="text-xl font-semibold mb-4">Voting Trends</h2>
        <div className="h-[300px] md:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="votes" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  icon: React.FC<any>;
  trend: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, trend }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-lg md:text-2xl font-semibold mt-1">{value}</p>
        </div>
        <Icon className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
      </div>
      <p className="text-sm text-green-600 mt-2">{trend}</p>
    </div>
  );
};

export default Dashboard;