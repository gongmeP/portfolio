package admin;

import java.sql.Connection;
import java.sql.DriverManager;

public class dbconfig {

	public static Connection info() throws Exception{
		
		String db_drv = "com.mysql.jdbc.Driver";
//		String db_drv = "com.mysql.cj.jdbc.Driver";
		String db_url = "jdbc:mysql://localhost/pjk5002";
//		String db_url = "jdbc:mysql://umj7-020.cafe24.com/pjk5002";
		String db_user = "pjk5002";
		String db_passwd = "diaak2qjsdldi!";
		

		Class.forName(db_drv); 
		
		
		Connection con = DriverManager.getConnection(db_url,db_user,db_passwd);
		System.out.println(con);
		
		return con;
		
	}
}
