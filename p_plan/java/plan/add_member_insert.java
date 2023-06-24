package plan;

import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class add_member_insert {
	
	dbconfig dbc = new dbconfig();

	public String join(String m_id,String m_passwd,String m_name,String m_tel,String m_email,String sms,String event) throws Exception{
	
//		MessageDigest md = MessageDigest.getInstance("MD5");
//		md.update(m_passwd.getBytes("utf-8"));
//		byte[] code = md.digest();
//		StringBuilder sb = new StringBuilder();
//		for(byte b: code ) {
//			String repass = String.format("%02x", b);
//			sb.append(repass);
//		}
		
		
		Connection con = this.dbc.info();	
		String insert = "insert into member values ('0',?,?,?,?,?,?,?,default)";
		
		PreparedStatement ps = con.prepareStatement(insert);
		
		ps.setString(1, m_id);
//		ps.setString(2, sb.toString());
		ps.setString(2, m_passwd);
		ps.setString(3, m_name);
		ps.setString(4, m_tel);
		ps.setString(5, m_email);
		ps.setString(6, sms);
    	ps.setString(7, event);

		int call = ps.executeUpdate(); 
		
		String msg = "";
		if(call > 0) {
			msg = "yes";
		}else {
			msg = "no";
		}
						
		con.close();
		ps.close();
		
		return msg;
		
		
	}
}
