
import React, { useState, useEffect, useMemo } from 'react';
import { CAREER_PATHS } from '../constants';
import { CareerPathNode } from '../types';

const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
        return <>{text}</>;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
        <>
            {parts.map((part, i) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <mark key={i} className="bg-marg-accent/30 rounded p-0 m-0">{part}</mark>
                ) : (
                    part
                )
            )}
        </>
    );
};


const SkillPill: React.FC<{ skill: string, searchTerm: string }> = ({ skill, searchTerm }) => (
  <span className="inline-block bg-marg-bg-light text-marg-secondary text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded-full">
    {highlightText(skill, searchTerm)}
  </span>
);

const TreeNode: React.FC<{
  node: CareerPathNode;
  onSelect: (node: CareerPathNode) => void;
  selectedNodeId: string | null;
  searchTerm: string;
}> = ({ node, onSelect, selectedNodeId, searchTerm }) => {
  const isSelected = node.id === selectedNodeId;
  return (
    <li className="relative">
      <div
        onClick={() => onSelect(node)}
        className={`inline-block p-3 my-2 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 w-full md:w-auto
          ${isSelected ? 'bg-marg-secondary/10 border-marg-secondary shadow-lg' : 'bg-white border-gray-200'}`}
      >
        <h4 className="font-bold text-marg-primary">{highlightText(node.name, searchTerm)}</h4>
      </div>
      {node.children && node.children.length > 0 && (
        <ul className="pl-8 border-l-2 border-gray-300 ml-4">
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} onSelect={onSelect} selectedNodeId={selectedNodeId} searchTerm={searchTerm} />
          ))}
        </ul>
      )}
    </li>
  );
};


const CareerPathsPage: React.FC = () => {
  const [activePathKey, setActivePathKey] = useState(Object.keys(CAREER_PATHS)[0]);
  const [selectedNode, setSelectedNode] = useState<CareerPathNode | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const activePath = CAREER_PATHS[activePathKey].data;
  
  const filterTree = (node: CareerPathNode, term: string): CareerPathNode | null => {
    if (!term) return node;
    const lowerCaseTerm = term.toLowerCase();

    const filteredChildren = node.children
      ?.map(child => filterTree(child, term))
      .filter((child): child is CareerPathNode => child !== null) || [];

    const isMatch = node.name.toLowerCase().includes(lowerCaseTerm) ||
                    node.description.toLowerCase().includes(lowerCaseTerm) ||
                    node.skills.some(skill => skill.toLowerCase().includes(lowerCaseTerm));

    if (isMatch || filteredChildren.length > 0) {
      return { ...node, children: filteredChildren };
    }

    return null;
  };

  const filteredPath = useMemo(() => {
    if (!searchTerm) {
        return activePath;
    }
    return filterTree(activePath, searchTerm);
  }, [activePath, searchTerm]);


  useEffect(() => {
    // Select the root node by default when the path or filter changes
    setSelectedNode(filteredPath);
  }, [filteredPath]);

  return (
    <div className="bg-marg-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
            <div>
                 <h1 className="text-4xl font-extrabold text-marg-primary mb-2">Explore Career Paths</h1>
                 <p className="text-lg text-marg-text-secondary">Visualize the journey from start to specialization.</p>
            </div>
             <div className="w-full md:w-64">
                <select 
                    onChange={(e) => {
                        setActivePathKey(e.target.value);
                        setSearchTerm('');
                    }} 
                    value={activePathKey}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marg-accent focus:outline-none bg-white"
                    aria-label="Select a career path"
                >
                    {Object.keys(CAREER_PATHS).map(key => (
                        <option key={key} value={key}>{CAREER_PATHS[key].name}</option>
                    ))}
                </select>
            </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 lg:col-span-4 bg-white p-4 rounded-lg border border-gray-200 h-[70vh] overflow-y-auto">
             <input
                type="text"
                placeholder="Search by name, skill, etc..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marg-accent focus:outline-none mb-4 sticky top-0 bg-white z-10"
              />
            {filteredPath ? (
                 <ul className="pl-0">
                    <TreeNode node={filteredPath} onSelect={setSelectedNode} selectedNodeId={selectedNode?.id || null} searchTerm={searchTerm}/>
                </ul>
            ) : (
                <p className="text-center text-marg-text-secondary p-4">No matching nodes found.</p>
            )}
          </div>

          <div className="md:col-span-7 lg:col-span-8 sticky top-24">
            {selectedNode && (
              <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 animate-fade-in">
                <h2 className="text-2xl font-bold text-marg-primary mb-3">{highlightText(selectedNode.name, searchTerm)}</h2>
                <p className="text-marg-text-secondary mb-6">{highlightText(selectedNode.description, searchTerm)}</p>
                
                <div className="mb-6">
                    <h3 className="font-semibold text-marg-primary mb-3">Required Skills</h3>
                    <div>
                        {selectedNode.skills.length > 0 ? selectedNode.skills.map(skill => <SkillPill key={skill} skill={skill} searchTerm={searchTerm} />) : <p className="text-sm text-gray-500">None specified.</p>}
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-marg-primary mb-3">Educational Path</h3>
                     <ul className="list-disc list-inside text-marg-text-secondary space-y-1">
                        {selectedNode.education.length > 0 ? selectedNode.education.map(edu => <li key={edu}>{edu}</li>) : <p className="text-sm text-gray-500">Primarily based on experience.</p>}
                     </ul>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPathsPage;