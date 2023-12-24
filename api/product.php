<?php
require 'db_config.php';
	$allPackage = $db_conn->query("SELECT * FROM tbl_product");
		if(mysqli_num_rows($allPackage) > 0){
			while($row = $allPackage->fetch_assoc()){
				$viewjson["product_id"] = $row['product_id'];
				$viewjson["product_title"] = $row['product_title'];
				$viewjson["product_short_description"] = $row['product_short_description'];
				$viewjson["product_long_description"] = $row['product_long_description'];
				$viewjson["product_image"] = $row['product_image'];
				$viewjson["product_price"] = $row['product_price'];
				$viewjson["product_quantity"] = $row['product_quantity'];
				$viewjson["product_feature"] = $row['product_feature'];
				$viewjson["product_category"] = $row['product_category'];
				$viewjson["product_brand"] = $row['product_brand'];
				$viewjson["product_author"] = $row['product_author'];
				$viewjson["product_view"] = $row['product_view'];
				$viewjson["published_date"] = $row['published_date'];
				$viewjson["publication_status"] = $row['publication_status'];
				$json_array[] = $viewjson;
			}
			echo json_encode(["success"=>true,"packagelist"=>$json_array]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?> 