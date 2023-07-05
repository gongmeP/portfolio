package admin;

import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class logingo {
	dbconfig dbc = new dbconfig();
	
	public String logingogo(String m_id,String m_passwd) throws Exception {
		MessageDigest md = MessageDigest.getInstance("MD5");
		md.update(m_passwd.getBytes("utf-8"));
		byte[] code = md.digest();
		StringBuilder sb = new StringBuilder();
		for(byte b: code ) {
			String repass = String.format("%02x", b);
			sb.append(repass);
		}
		
		
		Connection con = this.dbc.info();
		
		String insert = "select m_id,m_name,YN from port_ta where m_id=? and m_passwd=?;";
		
		PreparedStatement ps = con.prepareStatement(insert);
		
		ps.setString(1, m_id);
		ps.setString(2, sb.toString());
		
		
		System.out.println(insert);

		ResultSet rslogin = ps.executeQuery();
		
		String msg = "";
		String userid = "";
		String usernm = "";
		String userYN = "";

		
		while(rslogin.next()) {
			userid = rslogin.getString("m_id");
			usernm = rslogin.getString("m_name");
			userYN = rslogin.getString("YN");
			
			msg = "true";
		}
		
		System.out.println(msg);
		con.close();
		ps.close();
		return msg+","+userid+","+usernm+","+userYN;
	}
}
