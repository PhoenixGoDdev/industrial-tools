import React, { useState } from "react";

const WhereToBuy = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const distributors = [
    {
      id: 1,
      name: "Pro Tools Supply Co.",
      country: "United States",
      city: "New York, NY",
      address: "123 Industrial Blvd, New York, NY 10001",
      phone: "+1 (212) 555-0123",
      email: "sales@protoolssupply.com",
      website: "www.protoolssupply.com",
    },
    {
      id: 2,
      name: "Industrial Equipment Ltd.",
      country: "United Kingdom",
      city: "London",
      address: "456 Commerce Street, London, EC1A 1BB",
      phone: "+44 20 7123 4567",
      email: "info@industrialequipment.co.uk",
      website: "www.industrialequipment.co.uk",
    },
    {
      id: 3,
      name: "Werkzeug Handels GmbH",
      country: "Germany",
      city: "Berlin",
      address: "Industriestraße 789, 10115 Berlin",
      phone: "+49 30 12345678",
      email: "kontakt@werkzeughandels.de",
      website: "www.werkzeughandels.de",
    },
  ];

  const countries = ["United States", "United Kingdom", "Germany"];

  const filteredDistributors = distributors.filter((dist) => {
    const matchesCountry = !selectedCountry || dist.country === selectedCountry;
    const matchesSearch =
      !searchQuery ||
      dist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dist.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  return (
    <div style={{ 
      minHeight: '100vh', 
      paddingTop: '6rem', 
      paddingBottom: '4rem',
      backgroundColor: '#f8f9fa',
      color: '#333'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem' 
      }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#333'
          }}>
            Where to Buy
          </h1>
          <p style={{ 
            color: '#666', 
            fontSize: '1.125rem',
            maxWidth: '42rem',
            margin: '0 auto'
          }}>
            Find authorized distributors and dealers near you
          </p>
        </div>

        {/* Search Section */}
        <div style={{ 
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '1.5rem',
          marginBottom: '3rem'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            <div>
              <label 
                htmlFor="country" 
                style={{ 
                  display: 'block',
                  fontWeight: 'medium',
                  marginBottom: '0.5rem',
                  color: '#333'
                }}
              >
                Select Country
              </label>
              <select
                id="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '0.25rem',
                  fontSize: '1rem'
                }}
              >
                <option value="">All Countries</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label 
                htmlFor="search" 
                style={{ 
                  display: 'block',
                  fontWeight: 'medium',
                  marginBottom: '0.5rem',
                  color: '#333'
                }}
              >
                Search by Name or City
              </label>
              <input
                id="search"
                type="text"
                placeholder="Enter distributor name or city"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '0.25rem',
                  fontSize: '1rem'
                }}
              />
            </div>
          </div>
        </div>

        {/* Distributors List */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredDistributors.length > 0 ? (
            filteredDistributors.map((distributor) => (
              <div
                key={distributor.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  padding: '1.5rem',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'semibold', 
                  marginBottom: '1rem',
                  color: '#333'
                }}>
                  {distributor.name}
                </h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.75rem'
                  }}>
                    <div style={{ 
                      color: '#f97316',
                      flexShrink: 0,
                      marginTop: '0.125rem'
                    }}>
                      📍
                    </div>
                    <div>
                      <p style={{ 
                        fontWeight: 'medium',
                        color: '#333'
                      }}>
                        {distributor.city}
                      </p>
                      <p style={{ color: '#666' }}>
                        {distributor.address}
                      </p>
                    </div>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.75rem'
                  }}>
                    <div style={{ 
                      color: '#f97316',
                      flexShrink: 0
                    }}>
                      📞
                    </div>
                    <a
                      href={`tel:${distributor.phone}`}
                      style={{ 
                        color: '#666',
                        textDecoration: 'none'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#f97316'}
                      onMouseOut={(e) => e.currentTarget.style.color = '#666'}
                    >
                      {distributor.phone}
                    </a>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <div style={{ 
                      color: '#f97316',
                      flexShrink: 0
                    }}>
                      ✉️
                    </div>
                    <a
                      href={`mailto:${distributor.email}`}
                      style={{ 
                        color: '#666',
                        textDecoration: 'none'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#f97316'}
                      onMouseOut={(e) => e.currentTarget.style.color = '#666'}
                    >
                      {distributor.email}
                    </a>
                  </div>
                </div>
                <a
                  href={`https://${distributor.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                    borderRadius: '0.25rem',
                    color: '#333',
                    textDecoration: 'none',
                    fontWeight: 'medium',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#f97316';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = '#f97316';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#333';
                    e.currentTarget.style.borderColor = '#ddd';
                  }}
                >
                  Visit Website →
                </a>
              </div>
            ))
          ) : (
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '3rem',
              textAlign: 'center',
              gridColumn: '1 / -1'
            }}>
              <p style={{ 
                color: '#666', 
                marginBottom: '1rem' 
              }}>
                No distributors found matching your search criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCountry("");
                  setSearchQuery("");
                }}
                style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #ddd',
                  borderRadius: '0.25rem',
                  backgroundColor: 'transparent',
                  color: '#333',
                  fontWeight: 'medium',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#f97316';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = '#f97316';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.borderColor = '#ddd';
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;