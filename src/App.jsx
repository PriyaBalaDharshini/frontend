/* import React, { useEffect, useState } from 'react'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';


const App = () => {

  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await fetch('http://localhost:8000/getAccessToken', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });


        console.log("Received response:", response);
        const data = await response.json();

        if (response.ok) {
          //console.log("Access token received:", data.access_token);
          setAccessToken(data.access_token);
        } else {
          console.error('Error fetching access token:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchAccessToken()
  }, [])

  if (!accessToken) {
    return <div>Loading...</div>; // will show a loading message while fetching the token
  }
  return (
    <div className='app'>
      <h1>Dashboard</h1>
      <PowerBIEmbed
        embedConfig={
          {
            type: 'report', // Supported types: report
            id: 'dd834c6a-cbc6-49e3-8052-76a660d52fa8', //report id
            //embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=dd834c6a-cbc6-49e3-8052-76a660d52fa8&groupId=2565dfad-79d0-4c65-89ac-5a57f60262e1&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=5d4fa0b3-b2d3-4243-97f7-8a8e46485dd0&groupId=4eb39473-d2f6-4e8f-bd85-e4be08b1f5ef&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
            accessToken: accessToken,
            tokenType: models.TokenType.Embed, // models.TokenType.Aad = for organization.
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false
                }
              },
            }
          }
        }

        eventHandlers={
          new Map([
            ['loaded', function () {
              console.log('Report loaded');
            }],
            ['rendered', function () {
              console.log('Report rendered');
            }],
            ['error', function (event) {
              console.log(event.detail);
            }]
          ])
        }

        cssClassName={
          "report-style-class"
        }

        getEmbeddedComponent={
          (embeddedReport) => {
            window.report = embeddedReport;
          }
        } />
    </div>
  )
}

export default App */



import React, { useState } from 'react';

const App = () => {
  const [reportId, setReportId] = useState('5d4fa0b3-b2d3-4243-97f7-8a8e46485dd0');
  const tenantId = 'b9285fff-1be1-4e9f-8354-9cb1f50bc5a7';

  const embedUrl = `https://app.powerbi.com/reportEmbed?reportId=${reportId}&autoAuth=true&ctid=${tenantId}`;

  return (
    <div className="app">
      <h1>Dashboard</h1>
      <iframe
        title="Power BI Report"
        width="1140"
        height="541.25"
        src={embedUrl}
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default App;
