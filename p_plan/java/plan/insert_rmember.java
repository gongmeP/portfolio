package plan;

import java.sql.Connection;
import java.sql.PreparedStatement;

//member insert sql문법 적용
public class insert_rmember {
	dbconfig dbc = new dbconfig();	
	
	public void rmember(String a1,String a2,String a3,String a4,String a5,String a6,String a8,String a7,String a9) throws Exception {		
		Connection con = dbconfig.info();
		String insert = "insert into rmember values ('0',?,?,?,?,?,?,?,?,?,?,default)";
		PreparedStatement ps = con.prepareStatement(insert);
		ps.setString(1, a1);
		ps.setString(2, a2);
		ps.setString(3, a3);
		ps.setString(4, a4);
		ps.setString(5, a5);
		ps.setString(6, a6);
		ps.setString(7, a7);
		ps.setString(8, a8);
		ps.setString(9, a9);
		ps.setString(10, "");
		int call = ps.executeUpdate();	
		con.close();
		ps.close();				
	}
}
