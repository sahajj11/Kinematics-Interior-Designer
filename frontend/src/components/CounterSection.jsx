import React from 'react';

const CounterSection = () => {
  const stats = [
    { label: 'Years of Experience', value: '12+' },
    { label: 'Projects Completed', value: '250+' },
    { label: 'Design Awards', value: '18' },
    { label: 'Global Partners', value: '45' },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-3xl font-serif mb-1">{stat.value}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;