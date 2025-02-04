

(function()
{
    angular.module("RouterModule",["ui.router"])
    .config(RoutesConfig)
    .controller("RoutingController", RoutingController)
    
    

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider)
    {
       $urlRouterProvider.otherwise("/Home");
       //state for home 
       $stateProvider.state('Home',
        {
            url:'/Home',
            template:"<h1>Welcome to Ismalil's Restaurant</h1><br><br>Food Categories <a ui-sref='Categories' ng-click='rctrl.GetFoodCategories();' >Categories</a>"
        })
       .state('Categories',
        {
            url:'/Categories',
            template:" <h1> Food Categories</h1>"

   +"<br><br><h2> Please choose the food category which you like</h2>"+
"<div>"+
   "<ul ng-repeat='category in rctrl.Categories'>"+
   //"<a ui-sref='FoodItems'  ><li class='li' id = {{category.id}} >"+

    "<a ui-sref='FoodItems'  ><li class='li' id = {{category.id}}  ng-click= 'rctrl.GetFoodItems($index+1);'>"+
  "{{category.name}} <br><br>"+
  "<img src = '{{category.imagePath}}'/>"+
   " <br><br><br>"+
   "</a>"
   +"</li>"+
  " </ul>"+
"</div>"

           
        })
        .state("FoodItems",
            {
                url:"/FoodItems",
                template:"<div> <h1>Have a delicious food </h1><div><ul ng-repeat = 'food in rctrl.FoodItems'><li>{{food.foodName}}</li></ul></div>"
              
           }
        );

       
       
    }

    RoutingController.$inject =["$http"];
     
    function RoutingController ($http)
    {
        var rctrl = this;
        rctrl.FoodItems=[];
        rctrl.categoryid = 0;
        rctrl.Categories = [];
        rctrl.GetFoodCategories = function()
        {
        
            
          $http({
           
            method:'GET',
            url:'https://localhost:7098/api/Categories/GetFoodCategories'
           
        }).then(function Success(response)
    {
    
      rctrl.Categories = response.data;
      
    },function Error(error)

    {
        alert(JSON.stringify(error))

    });

        }
           
        //Method for getting food items
        rctrl.GetFoodItems = function(catid)
        {
           
           alert("u clicked me");
           $http({
                  
               method:'GET',
               url:'https://localhost:7098/api/Categories/GetFoodItems'+"?catid="+catid
              
           }).then(function Success(response)
       {
       
        
         rctrl.FoodItems = response.data;
         
       },function Error(error)
       
       {
           alert(JSON.stringify(error))
       
       });
           
        }

    }


    
})()