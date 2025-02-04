import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Placeholder data for the last 5 years of KCPE performance
const data = [
  { year: '2019', performance: 70 },
  { year: '2020', performance: 72 },
  { year: '2021', performance: 75 },
  { year: '2022', performance: 78 },
  { year: '2023', performance: 80 },
];

// Calculate yearly averages
const yearlyAverages = data.map(item => ({ year: item.year, average: item.performance }));

// Placeholder data for top students
const topStudents = [
  { name: 'John Doe', score: 98 },
  { name: 'Jane Smith', score: 95 },
  { name: 'Michael Johnson', score: 93 },
  { name: 'Emily Davis', score: 91 },
  { name: 'Daniel Brown', score: 89 },
];

function BlogSection() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-gradient-to-r from-[#8B0000] to-[#D9708B] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 tracking-wide text-white">School Highlights</h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Top Students Section */}
          <div className="bg-white bg-opacity-90 p-8 shadow-xl rounded-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 text-[#8B0000]">Top Students</h3>
            <p className="text-lg mb-4 text-gray-700">Our highest-performing students in recent exams:</p>

            {/* Top Students Table */}
            <table className="min-w-full border-separate border-spacing-2">
              <thead>
                <tr>
                  <th className="border-b-2 px-4 py-2 text-left font-medium text-[#8B0000]">Student</th>
                  <th className="border-b-2 px-4 py-2 text-left font-medium text-[#8B0000]">Score (%)</th>
                </tr>
              </thead>
              <tbody>
                {topStudents.map((student, index) => (
                  <tr key={index} className="hover:bg-[#FDEDEC] transition-all duration-200 ease-in-out">
                    <td className="border-b px-4 py-2 text-gray-800">{student.name}</td>
                    <td className="border-b px-4 py-2 text-gray-800">{student.score}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Performance Graph */}
          <div className="bg-white bg-opacity-90 p-8 shadow-xl rounded-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 text-[#8B0000]">Performance Trends (Last 5 Years)</h3>
            <p className="text-lg mb-4 text-gray-700">Average performance of our students in KCPE exams over the years.</p>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearlyAverages}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="average" stroke="#8B0000" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BlogSection;
