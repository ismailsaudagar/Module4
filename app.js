

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
            template:"<h1>Welcome to Ismail's Restaurant</h1><br><br>Food Categories <a ui-sref='Categories' ng-click='rctrl.GetFoodCategories();' >Categories</a>"
        })
       .state('Categories',
        {
            url:'/Categories',
            template:" <h1> Food Categories</h1>"

   +"<br><br><h2> Please choose the food category which you like</h2>"+
"<div>"+
   "<ul ng-repeat='category in rctrl.Categories'>"+
   "<a ui-sref='FoodItems'  ><li class='li' id = {{category.id}} >"+

    "<a ui-sref='FoodItems'  ><li class='li' id = {{category.id}}  ng-click= 'rctrl.GetFoodItems(category.short_name);'>"+
  "{{category.name}} <br><br>{{category.short_name}}"+
  //"<img src = '{{category.imagePath}}'/>"+
   " <br><br><br>"+
   "</a>"
   +"</li>"+
  " </ul>"+
"</div>"

           
        })
        .state("FoodItems",
            {
                url:"/FoodItems",
                template:"<div> <h1>Have a delicious food </h1><div><ul ng-repeat = 'food in rctrl.FoodItems'><li>{{food.name}}</li></ul></div>"
              
           }
        );

       
       
    }

    RoutingController.$inject =["$http"];
     
    function RoutingController ($http)
    {
        var baseurl ="https://coursera-jhu-default-rtdb.firebaseio.com/"
        var rctrl = this;
        rctrl.FoodItems = [];
        rctrl.categoryid = 0;
        rctrl.Categories = [];
        
        //Method for getting food categories
        rctrl.GetFoodCategories =   function()
        {
           
           
         ServiceCall(baseurl+"categories.json","GET",false);
            
        }
           
        //Method for getting food items
        rctrl.GetFoodItems = function(catid)
        {
            alert(catid);
         ServiceCall(baseurl+"menu_items.json"+"?category="+catid,"GET",true)  ;     
           
        }

        //common method for service call
    function ServiceCall(url1,method1,isfood)
        {
         
            $http({
           
                method:method1,
                url:url1
                
               
            }).then(function Success(response)
        {
        
           
        if(isfood === false){
          
           
           rctrl.Categories  = response.data;
          
          return;
        }
       
        if(isfood === true){
            debugger;
           
            var data = response.data
        
    rctrl.FoodItems =  JSON.parse( response.data);

    for(var i = 0;i<rctrl.FoodItems.length;i++)
        {
            
            if(data[i].category.short_name ==catid)
            {
                rctrl.FoodItems.push(data[i].menu_items)
            }
        };
    return;
        }
      
            
          
        },function Error(error)
    
        {
            //alert(JSON.stringify(error))
    
        });
           
      
        }

    }

    
})()