package plan;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class part3select {
	dbconfig dbc = new dbconfig();
	
	public String part3sel(String number)throws Exception{
		Connection con = this.dbc.info();	
		
		String sql = "select * from rmember where rno=?";
		
		PreparedStatement ps = con.prepareStatement(sql);
		ps.setString(1, number);
		
		ResultSet RS = ps.executeQuery();
		
		
		String m_name  = "";
		String  m_tel = "";
		String m_mt = "";
		String  m_dong = "";
		String  m_money = "";
		String  m_person = "";
		String indate = "";
		String  outdate  = "";
		String rno  = "";
		String  m_date = "";

		String msg = "";
		while(RS.next()) {
			m_name = RS.getString("m_name");
			m_tel = RS.getString("m_tel");
			m_mt = RS.getString("m_mt");
			m_dong = RS.getString("m_dong");
			m_money = RS.getString("m_money");
			m_person = RS.getString("m_person");
			indate = RS.getString("indate");
			outdate = RS.getString("outdate");
			rno = RS.getString("rno");
			m_date = RS.getString("m_date");
			
			msg = "true";
		}
		
		System.out.println(msg);
		con.close();
		ps.close();
		return msg+","+m_name+","+m_tel+","+m_mt+","+m_dong+","+m_money+","+m_person+","+indate+","+outdate+","+rno+","+m_date;
	}
	
}
