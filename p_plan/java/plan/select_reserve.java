package plan;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class select_reserve {
	dbconfig dbc = new dbconfig();
	
	public String detele_ok(String rno)throws Exception {
		String msg = "false";
		Connection con = this.dbc.info();
		String sql = "delete from rmember where rno=?";
		
		PreparedStatement ps = con.prepareStatement(sql);
		ps.setString(1, rno);
		
		int rs = ps.executeUpdate();
		
		if(rs > 0) {
			msg="true";
		}
		
		con.close();
		ps.close();
		return msg;
	}
}
