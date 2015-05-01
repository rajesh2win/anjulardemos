/**
 * Created by KH998 on 4/26/2015.
 */
var simpleController = function ($scope)
{
    // Initialize the model variables
    $scope.firstName = "";
    $scope.lastName = "";

    // Define utility functions
    $scope.getFullName = function ()
    {
        return $scope.firstName + " " + $scope.lastName;
    };
};
