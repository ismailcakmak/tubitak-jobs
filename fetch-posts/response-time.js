// Script to measure response time for TÜBİTAK's API

// Function to measure API response time
async function measureResponseTime() {
    try {
      // The API endpoint URL
      const url = 'https://kariyer-backend.tubitak.gov.tr/anaSayfa/ilanDetayBolum/1683';
      
      // Headers for JSON request
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      
      // Record start time
      const startTime = performance.now();
      
      // Send the GET request
      console.log(`Sending GET request to: ${url}`);
      const response = await fetch(url, { headers });
      
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Parse the JSON response
      const data = await response.json();
      
      // Record end time
      const endTime = performance.now();
      
      // Calculate response time in milliseconds and seconds
      const responseTimeMs = endTime - startTime;
      const responseTimeSec = responseTimeMs / 1000;
      
      // Log results
      console.log(`Response received successfully`);
      console.log(`Response time: ${responseTimeMs.toFixed(2)} ms (${responseTimeSec.toFixed(2)} seconds)`);
      
      // Log response data size
      const dataSize = JSON.stringify(data).length;
      console.log(`Response data size: ${formatBytes(dataSize)}`);
      
      // Display a summary of the response content
      console.log('\nResponse content summary:');
      summarizeResponse(data);
      
      return {
        url,
        responseTimeMs,
        responseTimeSec,
        status: response.status,
        dataSize
      };
    } catch (error) {
      console.error('Error measuring response time:', error);
    }
  }
  
  // Function to format bytes into a readable format
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  
  // Function to create a summary of the response
  function summarizeResponse(data) {
    if (!data) {
      console.log('No data in response');
      return;
    }
    
    if (Array.isArray(data)) {
      console.log(`Array with ${data.length} items`);
      if (data.length > 0) {
        console.log('First item properties:', Object.keys(data[0]));
      }
    } else if (typeof data === 'object') {
      console.log('Object with properties:', Object.keys(data));
      
      // Look for common collection properties
      for (const key of Object.keys(data)) {
        if (Array.isArray(data[key])) {
          console.log(`Found array in property "${key}" with ${data[key].length} items`);
        }
      }
    } else {
      console.log(`Data type: ${typeof data}`);
    }
  }
  
  // Run multiple tests to get average response time
  async function runMultipleTests(count = 3) {
    console.log(`Running ${count} tests to measure average response time...`);
    
    const results = [];
    
    for (let i = 0; i < count; i++) {
      console.log(`\n--- Test ${i + 1} of ${count} ---`);
      const result = await measureResponseTime();
      
      if (result) {
        results.push(result);
      }
      
      // Add a small delay between requests to avoid overloading the server
      if (i < count - 1) {
        console.log('Waiting 2 seconds before next test...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    // Calculate average response time
    if (results.length > 0) {
      const totalMs = results.reduce((sum, result) => sum + result.responseTimeMs, 0);
      const averageMs = totalMs / results.length;
      const averageSec = averageMs / 1000;
      
      console.log(`\n--- Summary ---`);
      console.log(`Tests completed: ${results.length}`);
      console.log(`Average response time: ${averageMs.toFixed(2)} ms (${averageSec.toFixed(2)} seconds)`);
    } else {
      console.log('No successful tests to average');
    }
  }
  
  // Execute the tests
  runMultipleTests(3);