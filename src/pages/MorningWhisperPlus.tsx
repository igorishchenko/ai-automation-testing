import React from 'react';

const MorningWhisperPlus: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-medium text-green-900">Morning Whisper Plus</h1>
        <p className="mt-2 text-base text-gray-600">
          A deeper invitation to your daily ritual. Not just changing how you start your day, but changing how deeply it feels for you.
        </p>

        <div className="mt-6 space-y-4">
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-semibold text-gray-900">More personal connection</h2>
            <p className="text-sm font-bold text-gray-700">HISTORY • MOOD PATTERNS • EXTRA WHISPERS</p>
            <p className="mt-1 text-sm text-gray-600">
              Trace the journey of your thoughts with unlimited history and discover the subtle patterns of your morning spirit.
            </p>
          </div>

          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-semibold text-gray-900">Deeper relaxation</h2>
            <p className="text-sm font-bold text-gray-700">PREMIUM SOUNDSCAPES • EXTENDED SESSIONS</p>
            <p className="mt-1 text-sm text-gray-600">
              Immerse yourself in soundscapes recorded in ancient forests and quiet meadows, crafted for longer, unhurried moments.
            </p>
          </div>

          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-semibold text-gray-900">Emotional expression</h2>
            <p className="text-sm font-bold text-gray-700">PREMIUM CARDS • NO WATERMARKS • THEMES</p>
            <p className="mt-1 text-sm text-gray-600">
              Share your daily wisdom with exclusive artistic themes and pure, uninterrupted layouts that honor the words.
            </p>
          </div>

          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-semibold text-gray-900">Gentle growth</h2>
            <p className="text-sm font-bold text-gray-700">WEEKLY REFLECTIONS • JOURNAL • MILESTONES</p>
            <p className="mt-1 text-sm text-gray-600">
              Nurture your self-awareness with guided weekly reflections that bridge the gap between whispers and action.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-center text-sm font-medium text-gray-700">Select Your Pace</h3>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center p-4 bg-white shadow rounded">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Monthly</h4>
                <p className="text-sm text-gray-600">A small monthly support for your ritual</p>
              </div>
              <p className="text-lg font-bold text-gray-900">$2.99/mo</p>
            </div>
            <div className="flex justify-between items-center p-4 bg-white shadow rounded">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Yearly</h4>
                <p className="text-sm text-gray-600">Best value for long-term calm</p>
                <span className="text-xs font-bold text-green-600">SAVE 25%</span>
              </div>
              <p className="text-lg font-bold text-gray-900">$26.99/yr</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-center text-gray-500">
            Subscription renews automatically. Cancel anytime in account settings. Your support helps us keep the whispers quiet and intentional.
          </p>
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-green-700 text-white font-semibold rounded shadow">
            Start Plus Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default MorningWhisperPlus;
