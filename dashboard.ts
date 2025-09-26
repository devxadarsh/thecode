import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Financial Performance Data
  financialData = {
    revenue: { value: '$2.5M', growth: '+12.5%', trend: 'up' },
    profit: { value: '$450K', growth: '+8.2%', trend: 'up' },
    expenses: { value: '$2.05M', growth: '+5.1%', trend: 'down' },
    margin: { value: '18%', growth: '+2.1%', trend: 'up' }
  };

  // Top Users Data
  topUsers = [
    { name: 'John Smith', activity: 95, revenue: '$25K', status: 'active' },
    { name: 'Sarah Johnson', activity: 88, revenue: '$22K', status: 'active' },
    { name: 'Mike Brown', activity: 82, revenue: '$18K', status: 'inactive' },
    { name: 'Emily Davis', activity: 79, revenue: '$16K', status: 'active' }
  ];

  // Risk Assessment Data
  riskData = {
    overall: { level: 'Medium', score: 65, color: 'warning' },
    financial: { level: 'Low', score: 35, color: 'success' },
    operational: { level: 'High', score: 85, color: 'danger' },
    compliance: { level: 'Medium', score: 60, color: 'warning' }
  };

  // Health Metrics Data
  healthMetrics = {
    systemHealth: { status: 'Good', percentage: 94, color: 'success' },
    performance: { status: 'Excellent', percentage: 98, color: 'success' },
    availability: { status: 'Warning', percentage: 87, color: 'warning' },
    security: { status: 'Good', percentage: 92, color: 'success' }
  };

  // Issues Data
  issues = {
    critical: { count: 2, trend: '-50%', color: 'danger' },
    high: { count: 5, trend: '+25%', color: 'warning' },
    medium: { count: 12, trend: '+10%', color: 'info' },
    low: { count: 28, trend: '-15%', color: 'secondary' }
  };

  // MOP Performance Chart Configuration
  mopPerformanceChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#666',
          fontSize: 12
        },
        gridLines: {
          color: 'rgba(0,0,0,0.1)'
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#666',
          fontSize: 12
        },
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      display: true,
      position: 'top',
      labels: {
        fontColor: '#666',
        fontSize: 12
      }
    }
  };

  mopPerformanceChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  mopPerformanceChartType: ChartType = 'bar';
  mopPerformanceChartLegend = true;
  mopPerformanceChartData: ChartDataSets[] = [
    { 
      data: [65, 78, 82, 75, 89, 95], 
      label: 'Performance %',
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }
  ];

  // Revenue Trend Chart Configuration
  revenueTrendChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#666',
          fontSize: 12,
          callback: function(value) {
            return '$' + value + 'K';
          }
        },
        gridLines: {
          color: 'rgba(0,0,0,0.1)'
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#666',
          fontSize: 12
        },
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      display: false
    }
  };

  revenueTrendChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  revenueTrendChartType: ChartType = 'line';
  revenueTrendChartData: ChartDataSets[] = [
    {
      data: [180, 220, 190, 250, 280, 320],
      label: 'Revenue',
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      fill: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize any additional data or API calls here
  }

  getStatusIcon(status: string): string {
    switch(status.toLowerCase()) {
      case 'good':
      case 'excellent':
      case 'active':
        return 'fa-check-circle text-success';
      case 'warning':
        return 'fa-exclamation-triangle text-warning';
      case 'danger':
      case 'critical':
        return 'fa-times-circle text-danger';
      default:
        return 'fa-info-circle text-info';
    }
  }

  getTrendIcon(trend: string): string {
    if (trend.includes('+')) {
      return 'fa-arrow-up text-success';
    } else if (trend.includes('-')) {
      return 'fa-arrow-down text-danger';
    }
    return 'fa-minus text-muted';
  }
}
