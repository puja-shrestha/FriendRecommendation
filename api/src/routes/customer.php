<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

// Get All User
$app->get('/api/customers', function(Request $request, Response $response){
   $sql = "SELECT * FROM user";

   try{
        //Get the DB Object
        $db = new db();
        // Connect
        $db = $db->connect();

        $stmt = $db->query($sql);
        $customer = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($customer);


        
   } catch(PDOException $e){
       echo '{"error": {"text": '.$e->getMessage().'}';

   }


});

// Get Single User
$app->get('/api/customers/{user_id}', function(Request $request, Response $response){
    $id = $request->getAttribute('user_id');
    
    $sql = "SELECT * FROM user WHERE user_id = $id";
 
    try{
         //Get the DB Object
         $db = new db();
         // Connect
         $db = $db->connect();
 
         $stmt = $db->query($sql);
         $singlecustomer = $stmt->fetchAll(PDO::FETCH_OBJ);
         $db = null;
         echo json_encode($singlecustomer);
 
 
         
    } catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
 
    }
 
 
 });

 // Add User
$app->post('/api/customers/add', function(Request $request, Response $response){
    $name = $request->getParam('name');
    $email = $request->getParam('email');
    $username = $request->getParam('username');
    $password = $request->getParam('password');
    $dob = $request->getParam('dob');
    $description = $request->getParam('description');
    $interest_id = $request->getParam('interest_id');
    
    $sql = "INSERT INTO user (name,email,username,password,dob,description,interest_id) VALUES
    (:name,:email,:username,:password,:dob,:description,:interest_id)";
 
    try{
         //Get the DB Object
         $db = new db();
         // Connect
         $db = $db->connect();

         $stmt = $db->prepare($sql);

         $stmt->bindParam(':name' , $name);
         $stmt->bindParam(':email' , $email);
         $stmt->bindParam(':username' , $username);
         $stmt->bindParam(':password' , $password);
         $stmt->bindParam(':dob' , $dob);
         $stmt->bindParam(':description' , $description);
         $stmt->bindParam(':interest_id' , $interest_id);

         $stmt->execute();

         echo '{"notice": {"text": "Customer Added"}';
 
         
 
 
         
    } catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
 
    }
 
 
 });

