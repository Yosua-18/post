<?php
/**
 * @author   Natan Felles <natanfelles@gmail.com>
 */
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Class Migration_create_table_api_limits
 *
 * @property CI_DB_forge         $dbforge
 * @property CI_DB_query_builder $db
 */
class Migration_create_table_orders_item extends CI_Migration {


	public function up()
	{ 
		$table = "orders_item";
		$fields = array(
			'id'           => [
				'type'           => 'INT(11)',
				'auto_increment' => TRUE,
				'unsigned'       => TRUE,
			],
			'order_id'          => [
				'type' => 'INT(11)',
			], 
			'product_id'          => [
				'type' => 'INT(11)',
			], 
			'size_id'          => [
				'type' => 'INT(11)',
			],     
			'qty'          => [
				'type' => 'INT(11)',
			],  
			'price'          => [
				'type' => 'VARCHAR(100)',
			] 

		);
		$this->dbforge->add_field($fields);
		$this->dbforge->add_key('id', TRUE);
		$this->dbforge->create_table($table);
	 
	}


	public function down()
	{
		$table = "orders_item";
		$this->db->table_exists($table); 
	}

}