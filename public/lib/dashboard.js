var app = angular.module('dashboard_apps', ['ui.router']);

app.controller('mainController', function($scope, $http) {
    $scope.data = [];

    $http({
      method: 'GET',
      url: '/VW_LOOKUP_REPORT'
    }).then(function(data) {
        $scope.data = data;
    }, function(error) {
        console.log('Error: ' + error);
    });
});

app.controller('PeriodController', function($scope, $http) {
    $scope.data = [];

    $http({
      method: 'GET',
      url: '/VW_DATE_PERIOD'
    }).then(function(data) {
        $scope.data = data;
    }, function(error) {
        console.log('Error: ' + error);
    });
});

app.controller('SumPowerController', function($scope, $http) {
    $scope.data = [];

    $http({
      method: 'GET',
      url: '/VW_SUM_POWER'
    }).then(function(data) {
        $scope.data = data;
    }, function(error) {
        console.log('Error: ' + error);
    });
});

app.controller('AveragePowerController', function($scope, $http) {
    $scope.data = [];

    $http({
      method: 'GET',
      url: '/VW_AVG_POWER'
    }).then(function(data) {
        $scope.data = data;
    }, function(error) {
        console.log('Error: ' + error);
    });
});

app.controller('SumCO2Controller', function($scope, $http) {
    $scope.data = [];

    $http({
      method: 'GET',
      url: '/VW_SUM_CO2'
    }).then(function(data) {
        $scope.data = data;
    }, function(error) {
        console.log('Error: ' + error);
    });
});

app.controller('AvgIrradianceController', function($scope, $http) {
    $scope.data = [];

    $http({
      method: 'GET',
      url: '/VW_AVG_IRRADIANCE'
    }).then(function(data) {
        $scope.data = data;
    }, function(error) {
        console.log('Error: ' + error);
    });
});

app.controller('MonthlyPowerController', function($scope, $http) {
    $scope.data = [];

    $http({
      method: 'GET',
      url: '/VW_LOOKUP_MONTHLY_SUMPOWER'
    }).then(function(data) {
        $scope.data = data;
    }, function(error) {
        console.log('Error: ' + error);
    });
});

app.controller('MonthlyEffectivenessController', function($scope, $http) {
    $scope.data = [];

    $http({
      method: 'GET',
      url: '/VW_LOOKUP_MONTHLY_EFFECTIVENESS'
    }).then(function(data) {
        $scope.data = data;
    }, function(error) {
        console.log('Error: ' + error);
    });
});
