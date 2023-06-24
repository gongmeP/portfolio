package plan;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class selects {
	dbconfig dbc = new dbconfig();	
	
	public String yesno(String d1,String d2,String yaa) throws Exception{
		String result = "";
		Connection con = this.dbc.info();
		String sql = "select * from rmember where indate>=? and outdate<=? and m_dong = ?";
		PreparedStatement ps = con.prepareStatement(sql);
		ps.setNString(1, d1);
		ps.setNString(2, d2);
		ps.setNString(3, yaa);
		ResultSet rs = ps.executeQuery();
		
		ArrayList<String> al = new ArrayList<String>();
		while(rs.next()) {
			result = yaa;
		}
		
		return result;		
	}
	
	public ArrayList<String> myinfo(String mid) throws Exception{
		Connection con = this.dbc.info();
		String sql = "select m_name,m_tel from member where m_id=?";
		PreparedStatement ps = con.prepareStatement(sql);
		ps.setNString(1, mid);
		ResultSet rs = ps.executeQuery();
		
		ArrayList<String> al = new ArrayList<String>();
		while(rs.next()) {
			al.add(rs.getNString("m_name"));
			al.add(rs.getNString("m_tel"));			
		}
		
		return al;
		
	}
	
	
}
