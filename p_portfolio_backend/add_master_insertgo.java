package admin;

import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class add_master_insertgo {
	dbconfig dbc = new dbconfig();
	
	public String joingo(String m_id, String m_passwd,  String m_name , String m_email ,  String m_hp,  String m_buser,  String m_postion , String YN) throws Exception{
		
		 
				MessageDigest md = MessageDigest.getInstance("MD5");
				md.update(m_passwd.getBytes("utf-8"));
				byte[] code = md.digest();
				StringBuilder sb = new StringBuilder();
				for(byte b: code ) {
					String repass = String.format("%02x", b);
					sb.append(repass);
				}
				
				Connection con = this.dbc.info();	
				String insert = "insert into port_ta values ('0',?,?,?,?,?,?,?,?,default)";
				
				PreparedStatement ps = con.prepareStatement(insert);
				
				ps.setString(1, m_id);
				ps.setString(2, sb.toString());
				ps.setString(3, m_name);
				ps.setString(4, m_email);
				ps.setString(5, m_hp);
				ps.setString(6, m_buser);
				ps.setString(7, m_postion);
				ps.setString(8, YN);
		
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
