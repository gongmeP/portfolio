package plan;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class updatego {

dbconfig dbc = new dbconfig();
	
	public String uptades(String pay ,String rno)throws Exception{
		Connection con = this.dbc.info();	
		
		
		
		String sql = "update rmember set pay=? where rno=?";
		PreparedStatement ps = con.prepareStatement(sql);
		
		ps.setString(1, pay);		
		ps.setString(2, rno);	
		
		ps.executeUpdate();
		
		String msg = "";

		
		
			msg = "true";
	
		
		System.out.println(msg);
		con.close();
		ps.close();
		return msg;
	}
}
