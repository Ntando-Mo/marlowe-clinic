import { useMemo, useState } from 'react';
import FilterControls from '../components/FilterControls';
import ServiceCard from '../components/ServiceCard';
import LiveRegion from '../components/LiveRegion';
import { services } from '../data/services';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTriage, setSelectedTriage] = useState('All');

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        selectedCategory === 'All' || service.category === selectedCategory;
      const matchesTriage =
        selectedTriage === 'All' || service.triage === selectedTriage;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        service.name.toLowerCase().includes(query) ||
        service.summary.toLowerCase().includes(query);

      return matchesCategory && matchesTriage && matchesQuery;
    });
  }, [searchQuery, selectedCategory, selectedTriage]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Intentionally do not move focus away from the filter control
  };

  const handleTriageChange = (triage) => {
    setSelectedTriage(triage);
    // Intentionally do not move focus away from the filter control
  };

  const statusMessage = `Showing ${filteredServices.length} ${
    filteredServices.length === 1 ? 'clinic service' : 'clinic services'
  }.`;

  return (
    <main id="main-content" tabIndex="-1" className="section">
      <div className="container">
        <div className="section-header">
          <h1>Clinic Services</h1>
          <p>Browse available services by category, triage priority, or keyword.</p>
        </div>

        <FilterControls
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          selectedTriage={selectedTriage}
          onTriageChange={handleTriageChange}
        />

        <LiveRegion message={statusMessage} />

        <div className="card-grid">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </main>
  );
}