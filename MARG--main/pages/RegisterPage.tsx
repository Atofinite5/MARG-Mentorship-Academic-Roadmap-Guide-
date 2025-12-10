
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
import { User } from '../types';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSimulatedLogin = (user: User) => {
    login(user);
    switch(user.role) {
        case 'Student':
            navigate('/student');
            break;
        case 'Parent':
            navigate('/parent');
            break;
        case 'Teacher':
            navigate('/teacher');
            break;
    }
  };

  return (
    <div className="bg-marg-bg-light min-h-screen py-12 sm:py-16 px-4">
      <div className="max-w-lg mx-auto space-y-8">
        {/* Placeholder Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-marg-primary text-center mb-2">Create an Account</h2>
          <p className="text-center text-marg-text-secondary mb-8">This is a visual placeholder for demonstration.</p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-marg-text-secondary">Full Name</label>
              <input type="text" id="fullName" disabled className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm cursor-not-allowed" placeholder="e.g., Priya Sharma" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-marg-text-secondary">Email</label>
              <input type="email" id="email" disabled className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm cursor-not-allowed" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-marg-text-secondary">I am a...</label>
              <select id="role" disabled className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm cursor-not-allowed appearance-none">
                <option>Student</option>
                <option>Parent</option>
                <option>Teacher</option>
              </select>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-marg-text-secondary">Password</label>
              <input type="password" id="password" disabled className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm cursor-not-allowed" placeholder="••••••••" />
            </div>
            <button type="submit" disabled className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-marg-accent/50 cursor-not-allowed">
              Register
            </button>
          </form>
        </div>
        
        {/* Demo Login Buttons */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-bold text-center text-marg-primary mb-4">For Demonstration Purposes</h3>
              <p className="text-center text-marg-text-secondary text-sm mb-6">The form above is a placeholder. Click a button below to simulate logging in as different user types.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                      onClick={() => handleSimulatedLogin({ name: 'Ravi Kumar', role: 'Student' })} 
                      className="bg-marg-secondary text-white px-6 py-2.5 rounded-lg font-bold shadow hover:bg-marg-secondary/90 transition-all transform hover:scale-105"
                  >
                      Login as Student
                  </button>
                  <button 
                      onClick={() => handleSimulatedLogin({ name: 'Mrs. Sharma', role: 'Parent' })} 
                      className="bg-marg-primary text-white px-6 py-2.5 rounded-lg font-bold shadow hover:bg-marg-primary/90 transition-all transform hover:scale-105"
                  >
                      Login as Parent
                  </button>
                  <button 
                      onClick={() => handleSimulatedLogin({ name: 'Mr. Singh', role: 'Teacher' })} 
                      className="bg-marg-accent text-white px-6 py-2.5 rounded-lg font-bold shadow hover:bg-marg-accent/90 transition-all transform hover:scale-105"
                  >
                      Login as Teacher
                  </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;