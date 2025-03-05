import React from "react";

function JobFilters({ filters, setFilters, filterOptions }) {
  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const handleSearchChange = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  return (
    <div className="filters">
      <div className="filter-section">
        <h3 className="filter-title">Arama</h3>
        <input
          type="text"
          placeholder="İş ilanlarında ara..."
          className="search-input"
          value={filters.search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="filter-section">
        <h3 className="filter-title">Birim</h3>
        <div className="filter-group">
          {filterOptions.ilanBirimi.map((birim) => (
            <label key={birim} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.ilanBirimi.includes(birim)}
                onChange={() => handleCheckboxChange("ilanBirimi", birim)}
              />
              <span>{birim}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">Görev Yeri</h3>
        <div className="filter-group">
          {filterOptions.gorevYeri.map((yer) => (
            <label key={yer} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.gorevYeri.includes(yer)}
                onChange={() => handleCheckboxChange("gorevYeri", yer)}
              />
              <span>{yer}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">Tecrübe Yılı</h3>
        <div className="filter-group">
          {filterOptions.tecrubeYili.map((yil) => (
            <label key={yil} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.tecrubeYili.includes(yil)}
                onChange={() => handleCheckboxChange("tecrubeYili", yil)}
              />
              <span>{yil === null ? 'Tecrübe Şartı Yok' : `${yil} Yıl`}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">Bölüm</h3>
        <div className="filter-group">
          {filterOptions.departments.map((dept) => (
            <label key={dept} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.departments.includes(dept)}
                onChange={() => handleCheckboxChange("departments", dept)}
              />
              <span>{dept}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobFilters; 