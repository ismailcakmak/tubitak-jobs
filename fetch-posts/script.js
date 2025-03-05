/**
 * Fetches detailed job information including special qualifications
 * @param {number|string} ilanDetayId - The ID of the job posting
 * @returns {Promise<string|null>} - Promise resolving to special qualifications or null if not found
 */

async function fetchJobQualifications(ilanDetayId) {
  try {
    console.log(`Fetching special qualifications for job ID: ${ilanDetayId}...`);
    
    const url = `https://kariyer-backend.tubitak.gov.tr/anaSayfa/ilanDetay/${ilanDetayId}`;
    
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const responseData = await response.json();    
    
    // Extract qualifications based on response structure
    let qualifications = null;
    
    // If the response is an array with items
  
    if (responseData[0] && responseData[0].aranacakOzelKosul) {
      qualifications = responseData[0].aranacakOzelKosul;
    }


    console.log(`Job ID: ${ilanDetayId} - Special qualifications ${qualifications ? 'found' : 'not found'}`);
    
    return qualifications;
  } catch (error) {
    console.error(`Error fetching qualifications for job ID ${ilanDetayId}:`, error.message);
    return null;
  }
}

async function fetchTubitakJobPostings() {
  try {
    const url = 'https://kariyer-backend.tubitak.gov.tr/anaSayfa/YayindakiIlanlar';
    
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const responseData = await response.json();
    
    console.log(`Response received with ${responseData.length} items`);
    
    // Extract the job postings with specified fields
    const jobPostings = extractJobPostings(responseData);
    
    return jobPostings;
  } catch (error) {
    console.error('Error fetching job postings:', error.message);
    throw error;
  }
}

/**
 * Extracts specific job posting data from the API response
 * @param {Object|Array} responseData - The API response containing job postings
 * @returns {Array} - Array of job posting objects with selected fields
 */
function extractJobPostings(responseData) {
  // Check if the response is an array (direct list of jobs)
  if (Array.isArray(responseData)) {
    console.log(`Processing array of ${responseData.length} job postings`);
    
    // Extract only the fields we need from each job posting
    const jobPostings = responseData.map(item => {
      // Get the application deadline from the nested ilan object
      const applicationDeadline = item.ilan && item.ilan.ilanBitisTarih ? item.ilan.ilanBitisTarih : null;
      
      return {
        ilanDetayId: item.ilanDetayId,
        ilanId: item.ilanId,
        referansKod: item.referansKod,
        ilanBirimi: item.ilanBirimi,
        pozisyon: item.pozisyon,
        unvan: item.unvan,
        personelSayisi: item.personelSayisi,
        gorevYeri: item.gorevYeri,
        isinTanimi: item.isinTanimi,
        ilanBitisTarih: applicationDeadline
      };
    });
    
    return jobPostings;
  }
  // Check if the response has the List.item structure
  else if (responseData && responseData.List && responseData.List.item && Array.isArray(responseData.List.item)) {
    console.log(`Processing List.item structure with ${responseData.List.item.length} job postings`);
    
    // Extract only the fields we need from each job posting
    const jobPostings = responseData.List.item.map(item => {
      // Get the application deadline from the nested ilan object
      const applicationDeadline = item.ilan && item.ilan.ilanBitisTarih ? item.ilan.ilanBitisTarih : null;
      
      return {
        ilanDetayId: item.ilanDetayId,
        ilanId: item.ilanId,
        referansKod: item.referansKod,
        ilanBirimi: item.ilanBirimi,
        pozisyon: item.pozisyon,
        unvan: item.unvan,
        personelSayisi: item.personelSayisi,
        gorevYeri: item.gorevYeri,
        isinTanimi: item.isinTanimi,
        ilanBitisTarih: applicationDeadline
      };
    });
    
    return jobPostings;
  }
  else {
    console.error('Invalid API response structure');
    console.log('Response data type:', typeof responseData);
    if (typeof responseData === 'object') {
      console.log('Response keys:', Object.keys(responseData));
    }
    return [];
  }
}

/**
 * Fetches experience years required for a specific job posting
 * @param {number|string} ilanDetayId - The ID of the job posting
 * @returns {Promise<number|null>} - Promise resolving to the required experience years or null if not found
 */
async function fetchJobExperience(ilanDetayId) {
  try {
    console.log(`Fetching experience requirement for job ID: ${ilanDetayId}...`);
    
    const url = `https://kariyer-backend.tubitak.gov.tr/anaSayfa/ilanDetayTecrube/${ilanDetayId}`;
    
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const responseData = await response.json();
    
    // Extract experience years based on the actual response structure
    let experienceYears = null;
    
    // Handle array response (check first item if it's an array)
    if (Array.isArray(responseData) && responseData.length > 0) {
      experienceYears = responseData[0].tecrubeYili;
    } 
    // Handle single object response
    else if (responseData && responseData.tecrubeYili !== undefined) {
      experienceYears = responseData.tecrubeYili;
    }
    
    console.log(`Job ID: ${ilanDetayId} - Experience requirement: ${experienceYears !== null ? experienceYears + ' years' : 'Not specified'}`);
    
    // Return the experience years value
    return experienceYears;
  } catch (error) {
    console.error(`Error fetching experience for job ID ${ilanDetayId}:`, error.message);
    return null;
  }
}

/**
 * Fetches department (bolum) information for a specific job posting
 * @param {number|string} ilanDetayId - The ID of the job posting
 * @returns {Promise<Array|null>} - Promise resolving to array of departments or null if not found
 */
async function fetchJobDepartments(ilanDetayId) {
  try {
    console.log(`Fetching departments for job ID: ${ilanDetayId}...`);
    
    const url = `https://kariyer-backend.tubitak.gov.tr/anaSayfa/ilanDetayBolum/${ilanDetayId}`;
    
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const responseData = await response.json();
    
    // Extract departments from the response
    let departments = [];
    
    // Check if response is an array
    if (Array.isArray(responseData)) {
      // Map through the array and extract the "bolum" field from each item
      departments = responseData.map(item => item.bolum).filter(Boolean);
    }
    
    console.log(`Job ID: ${ilanDetayId} - Departments found: ${departments.length}`);
    if (departments.length > 0) {
      console.log(`Departments: ${departments.join(', ')}`);
    }
    
    return departments;
  } catch (error) {
    console.error(`Error fetching departments for job ID ${ilanDetayId}:`, error.message);
    return [];
  }
}

/**
 * Adds experience requirements, departments, and qualifications to job postings
 * @param {Array} jobPostings - Array of job posting objects
 * @returns {Promise<Array>} - Promise resolving to array of enhanced job posting objects
 */
async function enhanceJobPostings(jobPostings) {
  console.log(`Enhancing ${jobPostings.length} job postings with additional data...`);
  
  // Process jobs sequentially for better logging visibility
  const enhancedJobs = [];
  
  for (const job of jobPostings) {
    console.log(`Processing job: ${job.referansKod} - ${job.pozisyon}`);
    
    // Get experience years
    const experienceYears = await fetchJobExperience(job.ilanDetayId);
    
    // Get departments
    const departments = await fetchJobDepartments(job.ilanDetayId);
    
    // Get special qualifications
    const qualifications = await fetchJobQualifications(job.ilanDetayId);
    
    // Add all data to the job object
    enhancedJobs.push({
      ...job,
      tecrubeYili: experienceYears,
      departments: departments,
      aranacakOzelKosul: qualifications
    });
    
    console.log(`Completed enhancing job: ${job.referansKod}`);
  }
  
  return enhancedJobs;
}

// Function to export job postings as a JSON file
function exportJobsToJson(jobs, filename = 'jobs.json') {
  const fs = require('fs');
  
  try {
    // Convert the jobs array to a formatted JSON string
    const jsonData = JSON.stringify(jobs, null, 2);
    
    // Write the JSON string to a file
    fs.writeFileSync(filename, jsonData);
    
    console.log(`Successfully exported ${jobs.length} job postings to ${filename}`);
    return true;
  } catch (error) {
    console.error(`Error exporting job postings to JSON file: ${error.message}`);
    return false;
  }
}

// Main execution function
async function main() {
  try {
    // Step 1: Fetch basic job postings
    const jobPostings = await fetchTubitakJobPostings();
    console.log(`Successfully extracted ${jobPostings.length} basic job postings`);
    
    // Step 2: Add experience requirements and departments to each job
    const enhancedJobs = await enhanceJobPostings(jobPostings);
    
    console.log(`Completed processing ${enhancedJobs.length} job postings with additional data`);
    
    // Print first 2 job postings with additional data for verification
    if (enhancedJobs.length > 0) {
      console.log('Sample enhanced job postings:');
      console.log(JSON.stringify(enhancedJobs.slice(0, 2), null, 2));
    }
    
    // Step 3: Export the job postings to a JSON file
    exportJobsToJson(enhancedJobs, 'jobs.json');
    
    return enhancedJobs;
  } catch (error) {
    console.error('Failed to process job postings:', error);
    return [];
  }
}

// Run the example
main();