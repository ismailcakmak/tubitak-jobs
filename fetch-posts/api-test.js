const { log } = require("console");

  async function fetchJobExperience(ilanId) {
    try {
      console.log(`Fetching experience requirement for job ID: ${ilanId}...`);
      
      const url = `https://kariyer-backend.tubitak.gov.tr/anaSayfa/ilanDetay/${ilanId}`;
      
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
  
      const response = await fetch(url, { headers });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const responseData = await response.json();

      console.log(responseData);
      
      
      // Get the experience value
      const experienceYears = responseData && responseData.tecrubeYili !== undefined ? responseData.tecrubeYili : null;
      
      console.log(`Job ID: ${ilanId} - Experience requirement: ${experienceYears !== null ? experienceYears + ' years' : 'Not specified'}`);
      
      // Return the experience years value
      return experienceYears;
    } catch (error) {
      console.error(`Error fetching experience for job ID ${ilanId}:`, error.message);
      return null;
    }
  }
  


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

  async function main() {
    
    const jobsWithExperience = await fetchJobQualifications(1680);
    console.log(jobsWithExperience);
    

  }

  main();
