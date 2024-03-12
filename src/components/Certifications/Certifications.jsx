import React from 'react';
import './Certifications.css';
import azureAdministrator from '../../azure_administrator.png';
import azureAIFundamentals from '../../azure_ai_fundamentals.png';
import azureDataFundamentals from '../../azure_data_fundamentals.png';
import azureFundamentals from '../../azure_fundamentals.png';
import powerPlatform from '../../power_platform.png';
import start from '../../start.png';
import create from '../../create.png';
import explore from '../../explore.png';
import transform from '../../transform.png';
import pythonCoursera from '../../python_coursera.png';
import nptel from '../../nptel.png';

const badges = [
  {
    title: 'AZ-104 Azure Administrator Associate',
    image: azureAdministrator,
    url: 'https://www.credly.com/badges/328f036d-bf40-4e78-9277-6400b96e75a4/public_url'
  },
  { 
    title: 'AI-900 Azure AI Fundamentals',
    image: azureAIFundamentals,
    url: 'https://www.credly.com/badges/b0b49d3b-e01d-4b3d-86b5-e77572c5a1b6/public_url'
  },
  { 
    title: 'DP-900 Azure Data Fundamentals',
    image: azureDataFundamentals,
    url: 'https://www.credly.com/badges/25a600e8-3bc4-4095-b48c-2c2f50308fe0/public_url'
  },
  { 
    title: 'AZ-900 Azure Fundamentals',
    image: azureFundamentals,
    url: 'https://www.credly.com/badges/ddc47049-040e-4dc9-9377-774afdcdde7b/public_url'
  },
  { 
    title: 'PL-900 Power Platform Fundamentals',
    image: powerPlatform,
    url: 'https://www.credly.com/badges/e8f85ec0-06b5-4941-9875-3d68cc8a4de5/public_url'
  },
  { 
    title: 'Get Started with Tableau',
    image: start,
    url: 'https://www.credly.com/badges/4bbef56a-e019-44c3-9109-bf45c1a438b7/public_url'
  },
  { 
    title: 'Create Views and Dashboards',
    image: create,
    url: 'https://www.credly.com/badges/d2d606ce-20b3-4fcf-aab5-acb733e5ee07/public_url'
  },
  { 
    title: 'Explore and Analyze Data',
    image: explore,
    url: 'https://www.credly.com/badges/2671ad39-688d-4615-900b-1b4c68ab07aa/public_url'
  },
  { 
    title: 'Connect to and Transform Data',
    image: transform,
    url: 'https://www.credly.com/badges/0e2b0fbd-1555-4549-8ad0-d5e6921c6934/public_url'
  },
  { 
    title: 'Programming for Everybody(Getting Started with Python)',
    image: pythonCoursera,
    url: 'https://coursera.org/share/d9a792279ffc8f2885e14b80e3ef45e7'
  },
  { 
    title: 'Data Science for Engineers',
    image: nptel,
  }
];

const Certifications = () => {
  return (
    <div className="badges" id='certifications'>
      <h1 className="certificate" id="Certificate">Certifications</h1>
      <div className="badge-rows">
        {badges.map((badge, index) => (
          <div className="badge" key={index}>
            <a href={badge.url} target="_blank" rel="noopener noreferrer" className="link">
                <img src={badge.image} alt={badge.title}/>
            </a>
            <a href={badge.url} target="_blank" rel="noopener noreferrer" className="link">
              <h3 className="name">{badge.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
