
document.addEventListener('DOMContentLoaded', () => {
  
    // ========== CSAT SCORE CHART ==========
    const csatChart = createChart(
      'csatChart', // HTML element ID
      'line',      // Chart type
      ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of week
      [
        { // CGST dataset
          label: 'CGST',
          data: [0, 60, 15, 80, 0, 50, 65],
          borderColor: 'rgba(20, 255, 100, 1)', // Green line
          backgroundColor: 'rgba(20, 255, 100, 0.2)', // Light green fill
          fill: true,
          tension: 0.4 // Makes the line slightly curved
        },
        { // CMST dataset
          label: 'CMST',
          data: [30, 50, 40, 90, 35, 10, 75],
          borderColor: 'rgba(255, 120, 180, 1)', // Pink line
          backgroundColor: 'rgba(255, 120, 180, 0.2)', // Light pink fill
          fill: true,
          tension: 0.4
        },
        { // CSAT dataset
          label: 'CSAT',
          data: [0, 80, 25, 50, 10, 87, 20],
          borderColor: 'rgba(75, 160, 192, 1)', // Blue line
          backgroundColor: 'rgba(75, 160, 192, 0.2)', // Light blue fill
          fill: true,
          tension: 0.4
        }
      ],
      { // Chart options
        scales: {
          y: {
            beginAtZero: true, // Start y-axis at 0
            max: 100 // Max value is 100 (for percentages)
          }
        }
      }
    );
  
    // ========== TICKETS CHART ==========
    const ticketsChart = createChart(
      'ticketsChart', // HTML element ID
      'line',        // Chart type
      ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'], // Times
      [
        { // Opened Tickets dataset
          label: 'Opened Tickets',
          data: [5, 35, 45, 55, 70, 70, 65],
          borderColor: 'rgba(20, 255, 100, 1)', // Green line
          backgroundColor: 'rgba(20, 255, 180, 0.2)', // Light green fill
          fill: true
        },
        { // New Tickets dataset
          label: 'New Tickets',
          data: [0, 20, 50, 45, 30, 55, 60],
          borderColor: 'rgba(65, 162, 235, 1)', // Blue line
          backgroundColor: 'rgba(20, 50, 255, 0.2)', // Light blue fill
          fill: true
        },
        { // Closed Tickets dataset
          label: 'Closed Tickets',
          data: [2, 25, 55, 65, 55, 70, 65],
          borderColor: 'rgba(200, 50, 180, 1)', // Purple line
          backgroundColor: 'rgba(200, 50, 180, 0.2)', // Light purple fill
          fill: true
        }
      ],
      { // Chart options
        scales: {
          y: {
            beginAtZero: true // Start y-axis at 0
          }
        }
      }
    );
  
    function createChart(elementId, type, labels, datasets, options) {
      const ctx = document.getElementById(elementId).getContext('2d');
      return new Chart(ctx, {
        type: type,
        data: {
          labels: labels,
          datasets: datasets
        },
        options: options
      });
    }
  });

