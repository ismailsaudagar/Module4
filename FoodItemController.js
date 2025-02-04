   
//    (function()
// {

//     angular.module("FoodItemModule",[])
//     //.config(RoutesConfig)
//     .controller("FoodItemController",FoodItemController);

//     //RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

//     // function RoutesConfig($stateProvider, $urlRouterProvider)
//     // {
//     //    $urlRouterProvider.otherwise("/Home");


//     //    //state for home 
//     // //    $stateProvider.state('FoodItems',
//     // //     {
//     // //         url:'/FoodItems/{catid}',
//     // //         template:"<div> <h1>Have a delicious food </h1><div><ul ng-repeat= 'food in fic.FoodItems'><li>{{food.foodName}}</li></ul></div>",
//     // //         controller :"FoodItemController as fic",
//     // //         resolve:
//     // //         {
//     // //             items:['$stateParams',function($stateParams)
//     // //                 {
//     // //                   return fic.GetFoodItems().then(function(items)
//     // //                 {
//     // //                     return items[$stateParams.catid]
//     // //                 })
//     // //                 }
//     // //             ]
//     // //         }
//     // //     })
//     // }

//     FoodItemController.$inject = ['items'];
        
//     function FoodItemController(items)
//     {
       
//         var fic = this;
//         fic.FoodItems= items;
    
//     //     fic.GetFoodItems = function(catid)
//     //     {
           
           
//     //        $http({
                  
//     //            method:'GET',
//     //            url:'https://localhost:7098/api/Categories/GetFoodItems'+"?catid="+catid
              
//     //        }).then(function Success(response)
//     //    {
       
        
//     //    return  response.data;
         
//     //    },function Error(error)
       
//     //    {
//     //        alert(JSON.stringify(error))
       
//     //    });
           
//     //     }
    

//     }
// })()
   
   