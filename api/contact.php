<?php 

    require 'db_config.php';

    $abc = json_decode(file_get_contents("php://input"));

    // print_r($abc);

    if(isset($abc->data->name) && !empty(trim($abc->data->name) && isset($abc->data->email) && !empty($abc->data->email ) && isset($abc->data->phone) && !empty($abc->data->phone ) && isset($abc->data->subject) && !empty($abc->data->subject ) && isset($abc->data->address) && !empty($abc->data->address ) && isset($abc->data->details) && !empty($abc->data->details ))
    ){
        $name = $abc->data->name;
        $email = $abc->data->email;
        $phone = $abc->data->phone;
        $subject = $abc->data->subject;
        $address = $abc->data->address;
        $details = $abc->data->details;

        $sql = "INSERT INTO `complain`(`id`, `name`, `email`, `phone`, `subject`, `address`, `detailes`, `create_at`) VALUES (NULL, '$name', '$email', $phone, $subject, $address, $details, NOW())";
    
        // $sql = "INSERT INTO `complain`(`id`, `name`, `email`, `phone`, `subject`, `address`, `detailes`, `create_at`) VALUES(NULL, '$name', '$email', $phone, $subject, $address, $details, now())";
            $add = mysqli_query($db_conn, $sql);
    
            if(mysqli_affected_rows($db_conn) > 0) {
                echo json_encode(["msg"=>"Received your message successfully "]);
                return;
            } else {
                echo json_encode(["msg"=>"Something is wrong. Please Try Again"]);
                return;
            }
    } else {
        echo json_encode(["msg"=>"Please fill all the required fields!"]);
        return;
    
    }

    
  
?>