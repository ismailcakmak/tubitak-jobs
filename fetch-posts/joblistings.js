// Script to count job listings from TÜBİTAK's career API using JSON format

// Function to fetch and parse the JSON data
async function countJobListings() {
    try {
      // URL for the API endpoint
      const url = 'https://kariyer-backend.tubitak.gov.tr/anaSayfa/YayindakiIlanlar';
      
      // Send GET request to the API with headers indicating we want JSON
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Parse the JSON response
      const data = await response.json();
      
      // Check if the response is an array or has a specific property containing the listings
      // Assuming the data structure is an array of job items directly or within a property
      const items = Array.isArray(data) ? data : (data.List || data.items || data);
      
      // Count the number of items
      const itemCount = Array.isArray(items) ? items.length : 0;
      
      // Display the result
      console.log(`Total number of job listings: ${itemCount}`);
      
      // Optionally, display some details about the jobs
      if (itemCount > 0 && Array.isArray(items)) {
        console.log('\nSample of available positions:');
        const sampleSize = Math.min(5, itemCount);
        
        for (let i = 0; i < sampleSize; i++) {
          const item = items[i];
          const position = item.pozisyon || 'N/A';
          const department = item.ilanBirimi || 'N/A';
          const location = item.gorevYeri || 'N/A';
          
          console.log(`${i+1}. Position: ${position}`);
          console.log(`   Department: ${department}`);
          console.log(`   Location: ${location}`);
          console.log('------------------------');
        }
      }
      
      return itemCount;
    } catch (error) {
      console.error('Error fetching or parsing the job listings:', error);
      return 0;
    }
  }
  
  // Execute the function
  countJobListings();