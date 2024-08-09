import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

interface StatItem {
  label: string;
  value: string | number;
}

const ObliviosaAnniversary: React.FC = () => {
  const [stats, setStats] = useState<StatItem[]>([]);

  useEffect(() => {
    // Simulated API call to fetch stats
    const fetchStats = async () => {
      // Replace this with actual API call
      const mockStats: StatItem[] = [
        { label: 'Total Messages', value: 1234567 },
        { label: 'Unique Chatters', value: 54321 },
        { label: 'Most Active Chatter', value: 'SuperFan123' },
        { label: 'Most Used Emote', value: 'obliPog' },
        { label: 'Longest Stream', value: '24h 13m' },
        { label: 'Total Bits Cheered', value: 987654 },
      ];
      setStats(mockStats);
    };

    fetchStats();
    launchConfetti();
  }, []);

  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold text-center mb-8 animate-pulse">
          🎉 Obliviosa's 1 Year Chat-iversary! 🎉
        </h1>
        <p className="text-2xl text-center mb-12">
          Celebrating one amazing year of unforgettable moments and epic chat interactions!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{stat.label}</h2>
              <p className="text-4xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
        <button
          onClick={launchConfetti}
          className="mt-12 bg-yellow-400 text-purple-800 font-bold py-3 px-6 rounded-full text-xl hover:bg-yellow-300 transition-colors duration-300 mx-auto block"
        >
          Celebrate Again!
        </button>
      </div>
    </div>
  );
};

export default ObliviosaAnniversary;