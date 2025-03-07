import React, { useState, useEffect } from "react";
import JobCard from "./JobCard.jsx";
import JobFilters from "./JobFilters.jsx";
import JobDetail from "./JobDetail.jsx";

function JobListings({ showFavorites, favorites, onToggleFavorite }) {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filters, setFilters] = useState({
    ilanBirimi: [],
    gorevYeri: [],
    tecrubeYili: [],
    departments: [],
    search: "",
  });

  const [filterOptions, setFilterOptions] = useState({
    ilanBirimi: [],
    gorevYeri: [],
    tecrubeYili: [],
    departments: [],
  });

  useEffect(() => {
    fetch('/jobs.json')
      .then(response => response.json())
      .then(data => {
        setJobs(data);
        
        // Extract unique filter options
        const options = {
          ilanBirimi: [...new Set(data.map(job => job.ilanBirimi))].sort(Intl.Collator().compare),
          gorevYeri: [...new Set(data.map(job => job.gorevYeri))].sort(Intl.Collator().compare),
          tecrubeYili: [...new Set(data.map(job => job.tecrubeYili))].sort(Intl.Collator().compare),
          departments: [...new Set(data.flatMap(job => job.departments))].sort(Intl.Collator().compare),
        };
        
        setFilterOptions(options);
      })
      .catch(error => console.error('Error loading jobs:', error));
  }, []);

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const handleCloseDetails = () => {
    setSelectedJob(null);
  };

  const filteredJobs = (showFavorites ? favorites : jobs).filter((job) => {
    // Filter by search term
    if (
      filters.search &&
      !job.unvan.toLowerCase().includes(filters.search.toLowerCase()) &&
      !job.ilanBirimi.toLowerCase().includes(filters.search.toLowerCase()) &&
      !job.isinTanimi.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    // Filter by ilanBirimi
    if (filters.ilanBirimi.length > 0 && !filters.ilanBirimi.includes(job.ilanBirimi)) {
      return false;
    }

    // Filter by gorevYeri
    if (filters.gorevYeri.length > 0 && !filters.gorevYeri.includes(job.gorevYeri)) {
      return false;
    }

    // Filter by tecrubeYili
    if (filters.tecrubeYili.length > 0 && !filters.tecrubeYili.includes(job.tecrubeYili)) {
      return false;
    }

    // Filter by departments
    if (filters.departments.length > 0 && !job.departments.some(dept => filters.departments.includes(dept))) {
      return false;
    }

    return true;
  });

  return (
    <>
      <div className="grid-layout">
        <JobFilters 
          filters={filters} 
          setFilters={setFilters} 
          filterOptions={filterOptions}
        />
        <div className="jobs-container">
          <div className="results-header">
            <p className="results-count">
              {showFavorites ? 'Favori İlanlar' : 'Tüm İlanlar'} ({filteredJobs.length})
            </p>
          </div>
          {filteredJobs.length > 0 ? (
            <div className="jobs-grid">
              {filteredJobs.map((job) => (
                <JobCard 
                  key={job.ilanDetayId} 
                  job={job} 
                  onViewDetails={handleViewDetails}
                  onToggleFavorite={onToggleFavorite}
                  isFavorite={favorites.some(fav => fav.ilanDetayId === job.ilanDetayId)}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>{showFavorites ? 'Favori ilan bulunamadı' : 'İlan bulunamadı'}</h3>
              <p>
                {showFavorites 
                  ? 'Henüz favori ilanınız bulunmamaktadır.'
                  : 'Lütfen filtrelerinizi değiştirin veya arama terimini güncelleyin'}
              </p>
            </div>
          )}
        </div>
      </div>
      {selectedJob && (
        <JobDetail 
          job={selectedJob} 
          onClose={handleCloseDetails}
        />
      )}
    </>
  );
}

export default JobListings; 