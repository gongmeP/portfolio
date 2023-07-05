package admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.dbcp.BasicDataSource;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class adminapi {

	@Autowired
	BasicDataSource dataSourece;

	@RequestMapping("/admin/adminapi.do")
	public void apiserver(HttpServletRequest req, Model m) {
		String result = ""; 
		String apikey = req.getParameter("keys").intern(); 
		
		
		// DB호출
		try {
			if (apikey == "admin_knock2") {
				Connection con = dataSourece.getConnection();
				String sql = "select * from port_ta where YN='N' order by midx desc";
				PreparedStatement ps = con.prepareStatement(sql);
				ResultSet rs = ps.executeQuery(sql);

				
				
				JSONArray ja2 = new JSONArray();
				while (rs.next()) {
				
					JSONArray ja = new JSONArray();
					 ja.add(rs.getString("midx")); 
					 ja.add(rs.getString("m_name")); 
					 ja.add(rs.getString("m_id")); 
					 ja.add(rs.getString("m_hp")); 
					 ja.add(rs.getString("m_email")); 
					 ja.add(rs.getString("m_buser")); 
					 ja.add(rs.getString("m_postion")); 
					 ja.add(rs.getString("m_date")); 
					 ja.add(rs.getString("YN")); 
					 
					 ja2.add(ja);

				}
				
				result = ja2.toString(); 
				System.out.println(result);
				m.addAttribute("result", result);

				con.close();
				ps.close();

			} else {
				m.addAttribute("result", "error: 키 값 그거 아닌데"); 
			}
		} catch (Exception e) {
			m.addAttribute("result", "error: api.do 에러"); 
			System.out.println("Database 오류 ");

		}

	}
}
