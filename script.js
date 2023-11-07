    const tabLinks = document.querySelectorAll('.tab-header a');
    const tabs = document.querySelectorAll('.tab');

     tabLinks.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        tabs.forEach((tab) => {
          tab.classList.remove('active');
        });

        tabLinks.forEach((link) => {
          link.classList.remove('active');
        });

        tabs[index].classList.add('active');
        link.classList.add('active');
      });
    });

    tabs[0].classList.add('active');
    tabLinks[0].classList.add('active');


function fetchAndDisplayApi(event, resource) {
  event.preventDefault();

  const inputText = document.querySelector(`#${resource} input[name="inputText"]`).value;
  const formData = { inputText }; 

  fetch(`/get-data/${resource}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      const responseDiv = document.getElementById(`${resource}Response`);
      responseDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
      console.error('Error fetching the API response:', error);
    });
}




















    /* OUD
    // JavaScript to retrieve and display the API response
    const urlParams = new URLSearchParams(window.location.search);

    // Define an object with resources and their settings
    const resources = {
      users: {
        queryParam: 'users',
        elementId: 'userResponse',
      },
      games: {
        queryParam: 'games',
        elementId: 'gamesResponse',
      },
      categories: {
        queryParam: 'categories',
        elementId: 'categoriesResponse',
      },
      leaderboards: {
        queryParam: 'leaderboards',
        elementId: 'leaderboardsResponse',
      },
      levels: {
        queryParam: 'levels',
        elementId: 'levelsResponse',
      },
      runs: {
        queryParam: 'runs',
        elementId: 'runsResponse',
      },
      series: {
        queryParam: 'series',
        elementId: 'seriesResponse',
      },
      variables: {
        queryParam: 'variables',
        elementId: 'variablesResponse',
      }
    };

    // Function to fetch and display the API response for the specified resource
    function fetchApiResponse(resource) {
      const resourceData = resources[resource];
      const apiResponseDiv = document.getElementById('apiResponse');

      console.log('baap');

      // Check if the resource is valid
      if (resourceData) {
        const resourceQueryParam = resourceData.queryParam;
        const resourceElementId = resourceData.elementId;
        const apiResponse = urlParams.get(resourceQueryParam);
        const responseDiv = document.getElementById(resourceElementId);

        if (apiResponse) {
          const apiResponseObject = JSON.parse(decodeURIComponent(apiResponse));

          // Display the API response on the corresponding element, you can format it as needed
          responseDiv.innerHTML = `<pre>${JSON.stringify(apiResponseObject, null, 2)}</pre>`;
        } else {
          responseDiv.innerHTML = 'No API response available for ' + resource;
        }
      } else {
        apiResponseDiv.innerHTML = 'Invalid resource: ' + resource;
      }
    }

    // Automatically call the function based on the query string
    for (const resource in resources) {
      if (urlParams.has(resources[resource].queryParam)) {
        fetchApiResponse(resource);
      }
    }
    */