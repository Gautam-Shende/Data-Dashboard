document.addEventListener('DOMContentLoaded', function() {
  // Initialize charts
  initRevenueChart();
  initCategoryChart();
  
  // Mobile menu toggle (for small screens)
  const mobileMenuBtn = document.createElement('div');
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  document.body.appendChild(mobileMenuBtn);
  
  mobileMenuBtn.addEventListener('click', function() {
      document.querySelector('.sidebar').classList.toggle('active');
  });
  
  // Chart period toggle functionality
  const chartPeriodBtns = document.querySelectorAll('.chart-actions button');
  chartPeriodBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          // Remove active class from all buttons in the same container
          this.parentNode.querySelectorAll('button').forEach(b => {
              b.classList.remove('active');
          });
          
          // Add active class to clicked button
          this.classList.add('active');
          
          // Here you would typically update the chart data based on the selected period
          // For demo purposes, we'll just log the action
          console.log(`Switched to ${this.textContent} view`);
      });
  });
  
  // Simulate loading data
  setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
          card.classList.add('loaded');
      });
  }, 500);
});

function initRevenueChart() {
  const ctx = document.getElementById('revenueChart').getContext('2d');
  
  // Sample data
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const data = [12000, 19000, 15000, 22000, 24560, 21000, 23000];
  
  new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: 'Revenue',
              data: data,
              backgroundColor: 'rgba(108, 92, 231, 0.1)',
              borderColor: 'rgba(108, 92, 231, 1)',
              borderWidth: 2,
              tension: 0.4,
              fill: true,
              pointBackgroundColor: '#6c5ce7',
              pointBorderColor: '#ffffff',
              pointBorderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 6
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false
              },
              tooltip: {
                  backgroundColor: '#2d3436',
                  titleFont: {
                      size: 14,
                      weight: 'bold'
                  },
                  bodyFont: {
                      size: 12
                  },
                  padding: 12,
                  displayColors: false,
                  callbacks: {
                      label: function(context) {
                          return '$' + context.parsed.y.toLocaleString();
                      }
                  }
              }
          },
          scales: {
              y: {
                  beginAtZero: false,
                  grid: {
                      color: 'rgba(0, 0, 0, 0.05)'
                  },
                  ticks: {
                      callback: function(value) {
                          return '$' + value.toLocaleString();
                      }
                  }
              },
              x: {
                  grid: {
                      display: false
                  }
              }
          }
      }
  });
}

function initCategoryChart() {
  const ctx = document.getElementById('categoryChart').getContext('2d');
  
  // Sample data
  const labels = ['Electronics', 'Fashion', 'Home', 'Sports', 'Other'];
  const data = [45, 20, 15, 12, 8];
  const backgroundColors = [
      'rgba(108, 92, 231, 0.8)',
      'rgba(0, 206, 201, 0.8)',
      'rgba(253, 203, 110, 0.8)',
      'rgba(225, 112, 85, 0.8)',
      'rgba(99, 110, 114, 0.8)'
  ];
  
  new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: labels,
          datasets: [{
              data: data,
              backgroundColor: backgroundColors,
              borderWidth: 0,
              hoverOffset: 10
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%',
          plugins: {
              legend: {
                  position: 'right',
                  labels: {
                      usePointStyle: true,
                      pointStyle: 'circle',
                      padding: 20,
                      font: {
                          size: 12
                      }
                  }
              },
              tooltip: {
                  backgroundColor: '#2d3436',
                  titleFont: {
                      size: 14,
                      weight: 'bold'
                  },
                  bodyFont: {
                      size: 12
                  },
                  padding: 12,
                  displayColors: false,
                  callbacks: {
                      label: function(context) {
                          return context.parsed + '%';
                      }
                  }
              }
          }
      }
  });
}