package plan;

import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class logingo {
	dbconfig dbc = new dbconfig();
	
	public String logins(String m_id,String m_passwd) throws Exception {
//		MessageDigest md = MessageDigest.getInstance("MD5");
//		md.update(m_passwd.getBytes("utf-8"));
//		byte[] code = md.digest();
//		StringBuilder sb = new StringBuilder();
//		for(byte b: code ) {
//			String repass = String.format("%02x", b);
//			sb.append(repass);
//		}
		
		Connection con = this.dbc.info();
		
		String insert = "select * from member where m_id=? and m_passwd=?";
		
        PreparedStatement ps = con.prepareStatement(insert);
        
        System.out.println(insert);
		
		ps.setString(1, m_id);
//		ps.setString(2, sb.toString());
		ps.setString(2, m_passwd);
		
		
        ResultSet rs = ps.executeQuery();
		
		String msg = "";
		String userid = "";
		String usernm = "";
		

		
		while(rs.next()) {
			userid = rs.getString("m_id");
			usernm = rs.getString("m_name");
			
			
			msg = "true";
		}
		
		System.out.println(msg);
		con.close();
		ps.close();
		return msg+","+userid+","+usernm;
		//return msg+","+userid+","+usernm;
		
		
	}
}
